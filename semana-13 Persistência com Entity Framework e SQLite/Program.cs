//entity framework e sqlite

using System.Data.Common;
using System.Reflection;
using semana_13_Persistência_com_Entity_Framework_e_SQLite;

var db = new AtletaContext();

//Adicionar(new Atleta { Id = 1,Nome = "Ana", Altura = 1.6, Peso = 55 });
//Adicionar(new Atleta { Id = 2,Nome = "Bruno", Altura = 1.8, Peso = 80 });

var a1 = RetornarPorId(1);
var a2 = RetornarPorId(2);

// Console.WriteLine($"{a1?.Nome}");
// Console.WriteLine($"{a2?.Nome}");

// if (a1 != null)
// {
//     db.Atletas.Remove(a1);
//     db.SaveChanges();
// }

/*
if (a1 != null)
{
    a1.Nome += " Maria";
    Atualizar(a1);
}
*/
// var atletas = db.Atletas.ToList();
var atletas = db.Atletas.Where(x => x.Nome.StartsWith("Br")).OrderBy(x => x.Nome).ToList();

foreach (var obj in atletas)
    Console.WriteLine($"{obj?.Nome}");

// void Atualizar(Atleta obj)
// {
//     db.Atletas.Update(obj);
//     db.SaveChanges();
// }

Atleta? RetornarPorId(long id)
{
    return db.Atletas.Find(id);
}

Console.WriteLine("Fin");

// void Adicionar(Atleta obj)
// {
//     db.Atletas.Add(obj);
//     db.SaveChanges();
// }