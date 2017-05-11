from collections import Counter

def word_count(input):
    str = "".join([c if c.isalnum() else ' ' for c in input.lower()])
    words = str.split()
    return dict(Counter(words))

