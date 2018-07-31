using System;

public static class Gigasecond
{
    private const double GigaSecond = 1e9;
    public static DateTime Add(DateTime birthDate) => 
        birthDate.AddSeconds(GigaSecond);
}