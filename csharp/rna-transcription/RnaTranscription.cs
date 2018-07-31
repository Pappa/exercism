using System;
using System.Linq;
using System.Collections.Generic;

public static class RnaTranscription
{
    private static Dictionary<string, string> data = new Dictionary<string, string>
    {
        { "G", "C" }, 
        { "C", "G" }, 
        { "T", "A" }, 
        { "A", "U" }
    };

    public static string ToRna(string nucleotide)
    {
        var transposed = nucleotide.Select(Transpose);
        return String.Join("", transposed);
    }

    private static string Transpose(char c) => data[c.ToString()];
}