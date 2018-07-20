using System;

public static class Gigasecond
{
    private const double gigasecond = 1e9;
    public static DateTime Add(DateTime birthDate)
    {
        return birthDate.AddSeconds(gigasecond);
    }
}