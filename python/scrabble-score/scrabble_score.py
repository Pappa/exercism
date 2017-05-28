scores = { c: i for chars, i in [
    ("AEIOULNRST", 1),
    ("DG", 2),
    ("BCMP", 3),
    ("FHVWY", 4),
    ("K", 5),
    ("JX", 8),
    ("QZ", 10)
] for c in chars }

def score(chars):
    return sum([scores[c] for c in chars.upper()])
