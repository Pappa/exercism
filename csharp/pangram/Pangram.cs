using System;
using System.Linq;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public static class Pangram
{
    public static bool IsPangram(string input) =>
        UniqueLetters(input).Length == 26;

    private static char[] UniqueLetters(string input) => 
        input.Where(c => Char.IsLetter(c))
            .Select(c => Char.ToUpper(c))
            .Distinct()
            .ToArray();
}
