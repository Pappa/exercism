from string import ascii_lowercase
from random import choice

alphabet = list(ascii_lowercase)

def _shift(c, distance):
    idx = alphabet.index(c)
    return alphabet[(idx + distance) % 26]

def _generate_key():
    return ''.join(choice(alphabet) for i in range(100))


class Cipher(object):
    def __init__(self, key=_generate_key()):
        self._raise_if_invalid(key)
        self.key = key
        self._distances = [alphabet.index(c) for c in key]
        self._idx = 0

    def encode(self, txt):
        self._idx = 0
        return ''.join([_shift(c.lower(), self._get_distance()) for c in txt if c.isalpha()])

    def decode(self, txt):
        self._idx = 0
        return ''.join([_shift(c, -self._get_distance()) for c in txt])

    def _get_distance(self):
    	length = len(self._distances)
        distance = self._distances[self._idx]
        if length > 1:
        	self._idx = (self._idx + 1) % length
        return distance

    @staticmethod
    def _raise_if_invalid(key):
        invalid = [c for c in key if not c.islower()]
        if len(invalid) > 0:
            raise ValueError('Invalid key')



class Caesar(object):
    def __init__(self):
        pass

    def encode(self, txt):
        return ''.join([_shift(c.lower(), 3) for c in txt if c.isalpha()])

    def decode(self, txt):
        return ''.join([_shift(c, -3) for c in txt])