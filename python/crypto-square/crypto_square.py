from math import sqrt, ceil

def encode(txt):
    if not txt:
        return ''
    normalised = ''.join([c for c in txt.lower() if c.isalnum()])
    cols = int(ceil(sqrt(len(normalised))))
    return ' '.join([normalised[col::cols] for col in range(cols)])