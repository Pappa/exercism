using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Pangram
{
    public static bool IsPangram(string input) =>
        UniqueLetters(input).Length == 26;

    private static char[] UniqueLetters(string input) => 
        Regex.Replace(input, @"[^a-zA-Z]", "")
            .ToUpper()
            .ToCharArray()
            .Distinct()
            .ToArray();
}
