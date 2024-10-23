using System;

namespace ExtensionMethods;

public static class Extensoes
{
    public static double ElevadoA(double numero, double expoente)
    {
        return Math.Pow(numero, expoente);
    }

    public static string RemoverAcentos(this string texto)
    {
        string comAcentos = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç";
        string semAcentos = "AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc";

        for (int i = 0; i < comAcentos.Length; i++)

            texto = texto.Replace(comAcentos[i].ToString(), semAcentos[i].ToString());

        return texto;
    }
}
