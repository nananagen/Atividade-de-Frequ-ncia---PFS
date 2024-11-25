using System;

namespace semana_13_Persistência_com_Entity_Framework_e_SQLite;

public class Atleta
{
    public long Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public double Altura { get; set; }
    public double Peso { get; set; }
}
