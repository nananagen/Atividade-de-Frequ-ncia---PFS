using System;
using AtletaApi.Infra;
using AtletaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AtletaApi.Endpoints;

public static class AtletaEndpoints
{
    public static void AdicionarAtletaEnpoints(this WebApplication app)
    {   
        var grupo = app.MapGroup("/atletas");

        grupo.MapGet("/", GetAsync);
        grupo.MapGet("/{id}", GetById);
        grupo.MapPost("", PostAsync);
        grupo.MapPut("/{id}", PutAsync);
        grupo.MapDelete("/{id}", DeleteAsync);


;    }

    private static async Task<IResult> GetAsync(AtletaContext db)
    {
        return TypedResults.Ok(await db.Atletas.ToListAsync());
    }

        private static async Task<IResult> GetById(long id, AtletaContext db)
    {
        var obj = await db.Atletas.FindAsync(id);

        if (obj == null)
        return TypedResults.NotFound();

        return TypedResults.Ok(obj);
    }

    private static async Task<IResult> PostAsync(Atleta obj, AtletaContext db)
    {
        // nuget SnowFlake.Data
        obj.Id = GeradorId.GetId();
        await db.Atletas.AddAsync(obj);
        await db.SaveChangesAsync();

        return TypedResults.Created($"atletas/{obj.Id}", obj);
    }

    private static async Task<IResult> PutAsync(long id, Atleta objNovo, AtletaContext db)
    {
        if (id != objNovo.Id)
            return TypedResults.BadRequest();

        var obj = await db.Atletas.FindAsync(id);

        if (obj == null)
            return TypedResults.NotFound();

        obj.Nome = objNovo.Nome;
        obj.Altura = objNovo.Altura;
        obj.Peso = objNovo.Peso;

        db.Atletas.Update(obj);
        await db.SaveChangesAsync();

        return TypedResults.NoContent();
    }

    
    private static async Task<IResult> DeleteAsync(long id, AtletaContext db)
    {
        var obj = await db.Atletas.FindAsync(id);

        if (obj == null)
            return TypedResults.NotFound();

        db.Atletas.Remove(obj);
        await db.SaveChangesAsync();

        return TypedResults.NoContent();
    }

}
