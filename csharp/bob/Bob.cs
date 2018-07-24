using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Response(string input)
    {
        string statement = input.Trim();

        if (String.IsNullOrEmpty(statement)) 
            return "Fine. Be that way!";

        if (IsShouting(statement) && IsQuestion(statement))
            return "Calm down, I know what I'm doing!";

        if (IsShouting(statement)) 
            return "Whoa, chill out!";

        if (IsQuestion(statement))
            return "Sure.";

        return "Whatever.";
    }

    private static bool IsQuestion(string input) => 
        input.EndsWith("?");

    private static bool IsShouting(string input)
    {
        char[] letters = Regex.Replace(input, @"[^a-zA-Z]", "").ToCharArray();

        return letters.Length > 0 
            && Array.TrueForAll(letters, Char.IsUpper);
    }
}