using System;
using AtletaApi.Infra;
using AtletaApi.Models;

namespace AtletaApi.Endpoints;

public static class AtletaEndpoints
{
    public static void AdicionarAtletaEnpoints(this WebApplication app)
    {   
        app.MapGet("/atletas", Get);
        app.MapGet("/atletas/{id}", GetById);
        app.MapPost("/atleta", Post);
        app.MapPut("/atletas/{id}", Put);
        app.MapDelete("/atletas/{id}", Delete);


;    }

    private static IResult Get(AtletaContext db)
    {
        return TypedResults.Ok(db.Atletas.ToList());
    }

        private static IResult GetById(long id, AtletaContext db)
    {
        var obj = db.Atletas.Find(id);

        if (obj == null)
        return TypedResults.NotFound();

        return TypedResults.Ok(obj);
    }

    private static IResult Post(Atleta obj, AtletaContext db)
    {
        obj.Id = 1;
        db.Atletas.Add(obj);
        db.SaveChanges();

        return TypedResults.Created($"atletas/{obj.Id}", obj);
    }

    private static IResult Put(long id, Atleta objNovo, AtletaContext db)
    {
        if (id != objNovo.Id)
            return TypedResults.BadRequest();

        var obj = db.Atletas.Find(id);

        if (obj == null)
            return TypedResults.NotFound();

        obj.Nome = objNovo.Nome;
        obj.Altura = objNovo.Altura;
        obj.Peso = objNovo.Peso;

        db.Atletas.Update(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }

    
    private static IResult Delete(long id, AtletaContext db)
    {
        var obj = db.Atletas.Find(id);

        if (obj == null)
            return TypedResults.NotFound();

        db.Atletas.Remove(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }

}
