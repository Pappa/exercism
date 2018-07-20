using System;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        char[] letters = input.ToCharArray();
        Array.Reverse(letters);
        return new String(letters);
    }
}