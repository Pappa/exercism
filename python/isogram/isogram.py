import re

def is_isogram(input):
    letters = re.sub(r"[ -]+", "", input).lower()
    return len(letters) == len(set(letters))
