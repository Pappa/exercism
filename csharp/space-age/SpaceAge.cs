using System;

public class SpaceAge
{
    private const double EARTH_YEAR_IN_SEC = 31557600;
    private double age;

    public SpaceAge(long seconds)
    {
        age = (double)seconds;
    }

    public double OnEarth() =>
        AgeFromPeriod();

    public double OnMercury() =>
        AgeFromPeriod((double)0.2408467);

    public double OnVenus() =>
        AgeFromPeriod((double)0.61519726);

    public double OnMars() =>
        AgeFromPeriod((double)1.8808158);

    public double OnJupiter() =>
        AgeFromPeriod((double)11.862615);

    public double OnSaturn() =>
        AgeFromPeriod((double)29.447498);

    public double OnUranus() =>
        AgeFromPeriod((double)84.016846);

    public double OnNeptune() =>
        AgeFromPeriod((double)164.79132);

    private double AgeFromPeriod(double period = 1) =>
        age / EARTH_YEAR_IN_SEC / period;
}