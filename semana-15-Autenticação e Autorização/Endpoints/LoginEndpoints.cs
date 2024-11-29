using System;
using AtletaApi.Dtos;
using AtletaApi.Infra;
using AtletaApi.Models;
using AtletaApi.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AtletaApi.Endpoints;

public static class LoginEndpoints
{
    public static void AdicionarLoginEnpoints(this WebApplication app)
    {   
        var grupo = app.MapGroup("/login");

        grupo.MapPost("/app", PostLoginAppAsync);
        grupo.MapPost("/navegador", PostLoginNavegadorAsync);
    }

    private static async Task<IResult> PostLoginAppAsync(LoginDTO infoLogin, AtletaContext db,IPasswordHasher<Usuario> hasher)
    {
        var usuario = await db.Usuarios.FirstOrDefaultAsync(x => x.Email.Equals(infoLogin.Email));

        if (usuario == null)
            return TypedResults.Unauthorized();
        else if (hasher.VerifyHashedPassword(usuario, usuario.HashSenha, infoLogin.Senha) == PasswordVerificationResult.Failed)
            return TypedResults.Unauthorized();

        return TypedResults.Ok(new TokenService().Gerar(usuario));
    }

        private static async Task<IResult> PostLoginNavegadorAsync(LoginDTO infoLogin, AtletaContext db, HttpContext contexto, IPasswordHasher<Usuario> hasher)
    {
        var usuario = await db.Usuarios.FirstOrDefaultAsync(x => x.Email.Equals(infoLogin.Email));

        if (usuario == null)
            return TypedResults.Unauthorized();

        var token = new TokenService().Gerar(usuario);

        contexto.Response.Cookies.Append(
            "accessToken",
            token,
            new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.None,
                //Secure = true,
            }
        );

        return TypedResults.Ok();
    }
}
