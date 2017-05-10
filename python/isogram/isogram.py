import re

def is_isogram(input):
    letters = re.sub(r"[ -]+", "", input).lower()
    uniqueLetters = set(list(letters))
    return len(letters) == len(uniqueLetters)
