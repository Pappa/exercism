import re

def is_isogram(input):
    letters = re.sub(r"(?i)[^a-z]", "", input).lower()
    return len(letters) == len(set(letters))
