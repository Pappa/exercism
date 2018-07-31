using System;
using System.Collections.Generic;
using System.Linq;

public static class Hamming
{
    public static int Distance(string first, string second)
    {
        if (first.Length != second.Length) {
            throw new ArgumentException();
        }
        return first.ToCharArray()
            .Zip(second.ToCharArray(), CountIfDifferent)
            .Sum();
    }

    private static int CountIfDifferent(char a, char b) => a != b ? 1 : 0;
}