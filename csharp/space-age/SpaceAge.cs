using System;

public class SpaceAge
{
    private const float EARTH_YEAR_IN_SEC = 31557600;
    private float age;

    public SpaceAge(long seconds)
    {
        age = (float)seconds;
    }

    public double OnEarth() =>
        AgeFromPeriod();

    public double OnMercury() =>
        AgeFromPeriod((float)0.2408467);

    public double OnVenus() =>
        AgeFromPeriod((float)0.61519726);

    public double OnMars() =>
        AgeFromPeriod((float)1.8808158);

    public double OnJupiter() =>
        AgeFromPeriod((float)11.862615);

    public double OnSaturn() =>
        AgeFromPeriod((float)29.447498);

    public double OnUranus() =>
        AgeFromPeriod((float)84.016846);

    public double OnNeptune() =>
        AgeFromPeriod((float)164.79132);

    private double AgeFromPeriod(float period = 1) =>
        (double)(age / (EARTH_YEAR_IN_SEC * period));
}