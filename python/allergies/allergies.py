from itertools import compress

class Allergies(object):
    def __init__(self, x):
        allergies = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs']

        x = x % 256

        bits = [int(i) for i in str(bin(x))[2:]]
        bits = ([0] * (8 - len(bits))) + bits

        self.lst = [a[1] for a in zip(bits, allergies) if a[0] == 1]

    def is_allergic_to(self, item):
        return item in self.lst