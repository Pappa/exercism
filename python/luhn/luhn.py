from re import sub

class Luhn(object):
    def __init__(self, text):
        self._valid = False
        if self._is_invalid_string(text):
            return
        if self._checksum(text) == 0:
            self._valid = True

    def is_valid(self):
        return self._valid

    def _is_invalid_string(self, text):
        return len(sub(r"[0-9 ]", "", text)) > 0 or len(text) < 2

    def _checksum(self, text):
        numbers = [int(x) for x in sub(r"[^0-9]", "", text)]
        odd = numbers[-1::-2]
        even = numbers[-2::-2]
        total = sum(odd) + sum([int(x) for n in even for x in str(2 * n)])
        return total % 10