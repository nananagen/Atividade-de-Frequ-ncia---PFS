// Language Integrated Query
using TesteLinq;

var numeros = new int [] {1, 2, 5, 8, 10};
var palavras = new string[] {"Teste", "isso", "agora"};

var pares = from x in numeros where x % 2 ==0 select x;
var impares = numeros.Where(x => x % 2 != 0);

var palavrasComO = from x in palavras where x.Contains('o') || x.Contains('o') select x.ToUpper();

Imprimir(pares);
Console.WriteLine("---------------");
Imprimir(impares);
Console.WriteLine("---------------");
Imprimir(palavrasComO);

void Imprimir<T>(IEnumerable<T> itens)
{
    foreach (var item in itens)
            Console.WriteLine(item);
}