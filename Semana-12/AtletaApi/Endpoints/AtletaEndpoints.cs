using System;
using AtletaApi.Models;

namespace AtletaApi.Endpoints;

public static class AtletaEndpoints
{
    static AtletaEndpoints()
    {
        objetos = [];
    }

    public static void AdicionarAtletaEnpoints(this WebApplication app)
    {   
        app.MapGet("/atletas", Get);
        app.MapGet("/atletas/{id}", GetById);
        app.MapPost("/atleta", Post);
        app.MapPut("/atletas/{id}", Put);
        app.MapDelete("/atletas/{id}", Delete);


;    }

    private static IResult Get()
    {
        return objetos != null ? TypedResults.Ok(objetos) : TypedResults.NotFound();
    }

        private static IResult GetById(long id)
    {
        var obj = objetos.FirstOrDefault(x => x.Id == id);

        if (obj == null)
        return TypedResults.NotFound();

        return TypedResults.Ok(obj);
    }

    private static IResult Post(Atleta obj)
    {
        obj.Id = (objetos.MaxBy(x => x.Id)??new Atleta()).Id +1;
        objetos.Add(obj);

        return TypedResults.Created($"atletas/{obj.Id}", obj);
    }

    private static IResult Put(long id, Atleta objNovo)
    {
        if (id != objNovo.Id)
            return TypedResults.BadRequest();

        var obj = objetos.FirstOrDefault(x => x.Id == id);

        if (obj == null)
            return TypedResults.NotFound();

        obj.Nome = objNovo.Nome;
        obj.Altura = objNovo.Altura;
        obj.Peso = objNovo.Peso;

        return TypedResults.NoContent();
    }

    
    private static IResult Delete(long id)
    {
        var obj = objetos.FirstOrDefault(x => x.Id == id);

        if (obj == null)
            return TypedResults.NotFound();

        objetos.Remove(obj);

        return TypedResults.NoContent();
    }

    private static readonly IList<Atleta> objetos;
}
