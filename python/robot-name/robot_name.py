from random import choice, randint, seed
from string import ascii_uppercase as uppercase

class Robot(object):
    def __init__(self):
        self._generate_name()

    def reset(self):
        seed(self.name)
        self._generate_name()

    def _generate_name(self):
        letters = ''.join(choice(uppercase) for _ in range(2))
        numbers = ''.join([str(randint(0, 9)) for _ in range(3)])
        self.name = letters + numbers