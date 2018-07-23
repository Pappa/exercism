using System;
using System.Text.RegularExpressions;

public static class Bob
{
    private const string question = "Sure.";
    private const string yell = "Whoa, chill out!";
    private const string nada = "Fine. Be that way!";
    private const string whatever = "Whatever.";
    private const string calm = "Calm down, I know what I'm doing!";

    public static string Response(string input)
    {
        string statement = input.Trim();

        if (IsUpperCase(statement)) {
            if (IsQuestion(statement)) {
                return calm;
            }
            return yell;
        }
        if (IsQuestion(statement)) {
            return question;
        }
        if (IsEmpty(statement)) {
            return nada;
        }
        return whatever;
    }

    private static bool IsEmpty(string input) => 
        input == "";

    private static bool IsQuestion(string input) => 
        input.EndsWith("?");

    private static bool IsUpperCase(string input)
    {
        char[] letters = Regex.Replace(input, @"[^a-zA-Z]", "").ToCharArray();

        return letters.Length > 0 
            && Array.TrueForAll(letters, Char.IsUpper);
    }
}