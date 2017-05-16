from collections import Counter

def word_count(txt):
    txt = "".join([c if c.isalnum() else ' ' for c in txt.lower()])
    return Counter(txt.split())

