from functools import partial

EARTH_YEAR_IN_SECONDS = 31557600
MULTIPLIERS = {
    'on_mercury': 0.2408467,
    'on_venus': 0.61519726,
    'on_earth': 1.0,
    'on_mars': 1.8808158,
    'on_jupiter': 11.862615,
    'on_saturn': 29.447498,
    'on_uranus': 84.016846,
    'on_neptune': 164.79132
}

class SpaceAge(object):
    def __init__(self, age):
        self.seconds = age
        for planet in MULTIPLIERS:
            setattr(self, planet, partial(self.__age, planet))

    @staticmethod
    def __period(planet):
        return EARTH_YEAR_IN_SECONDS * MULTIPLIERS[planet]

    def __age(self, planet):
        age = self.seconds / self.__period(planet)
        return round(age, 2)