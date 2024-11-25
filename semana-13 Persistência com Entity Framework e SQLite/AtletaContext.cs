using System;
using Microsoft.EntityFrameworkCore;

namespace semana_13_Persistência_com_Entity_Framework_e_SQLite;

public class AtletaContext : DbContext
{
    public DbSet<Atleta> Atletas { get; set; }
    public  AtletaContext()
    {
        caminho = @$"{AppDomain.CurrentDomain.BaseDirectory}\atleta.db";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={caminho}");
    }

    private string caminho;
}
