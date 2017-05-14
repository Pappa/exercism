import re

def is_isogram(text):
    letters = re.sub(r"(?i)[^a-z]", "", text).lower()
    return len(letters) == len(set(letters))
