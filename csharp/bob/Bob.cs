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
        char[] letters = Regex.Replace(statement, @"[^a-zA-Z]", "").ToCharArray();

        if (letters.Length > 0 && Array.TrueForAll(letters, Char.IsUpper)) {
            if (statement.EndsWith("?")) {
                return calm;
            }
            return yell;
        }
        if (statement.EndsWith("?")) {
            return question;
        }
        if (statement == "") {
            return nada;
        }
        return whatever;
    }
}