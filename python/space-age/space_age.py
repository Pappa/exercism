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
        for planet in MULTIPLIERS.keys():
            self.__add_method(planet)

    def __add_method(self, planet):
        setattr(self.__class__, planet,
        	lambda self: self.__get_age(planet))

    def __period(self, planet):
    	return EARTH_YEAR_IN_SECONDS * MULTIPLIERS[planet]

    def __get_age(self, planet):
    	age = self.seconds / self.__period(planet)
    	return float(format(age, '.2f'))