import re

def is_pangram(input):
    letters = re.sub(r"[^a-zA-Z]+", "", input).lower()
    return len(set(letters)) == 26
