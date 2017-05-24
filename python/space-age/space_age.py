class SpaceAge(object):
    def __init__(self, age):
        self.seconds = age
        self._multipliers = {
            'on_mercury': 0.2408467,
            'on_venus': 0.61519726,
            'on_earth': 1.0,
            'on_mars': 1.8808158,
            'on_jupiter': 11.862615,
            'on_saturn': 29.447498,
            'on_uranus': 84.016846,
            'on_neptune': 164.79132
        };
        for planet in self._multipliers.keys():
            self.__add_method(planet)

    def __add_method(self, planet):
        setattr(self.__class__, planet,
        	lambda self: self._get_age(planet))

    def _period(self, planet):
    	return 31557600 * self._multipliers[planet]

    def _get_age(self, planet):
    	return float(format(self.seconds / self._period(planet), '.2f'))