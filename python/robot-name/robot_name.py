from random import sample, seed
from string import ascii_uppercase as uppercase, digits

class Robot(object):
    def __init__(self):
        self._generate_name()

    def reset(self):
        seed(self.name)
        self._generate_name()

    def _generate_name(self):
        letters = ''.join(sample(uppercase, 2))
        numbers = ''.join(sample(digits, 3))
        self.name = letters + numbers