using System;

namespace TesteLinq;

public class Extensoes;
{
    public static IEnumerable<T> Filtrar<T>(this IEnumerable<T> itens, Func<T, bool> selecionar)
    {
        foreach (var num in itens)
            if (selecionar(num))
                yield return num;
    }
}