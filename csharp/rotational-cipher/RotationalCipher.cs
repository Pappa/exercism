using System;
using System.Linq;

public static class RotationalCipher
{
    private const string Lower = "abcdefghijklmnopqrstuvwxyz";
    private const string Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static string Rotate(string text, int key) => 
        string.Join("", text.Select(c => Rotate(c, key)));

    private static char Rotate(char c, int key) {
        if (!Char.IsLetter(c)) {
            return c;
        }
        string alphabet = Char.IsLower(c) ? Lower : Upper;
        int idx = alphabet.IndexOf(c);
        return alphabet[(idx + key) % alphabet.Length];
    }
}