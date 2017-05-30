from math import sqrt

def primitive_triplets(n):
    if n % 4:
        raise ValueError
    else:
    	pass


def triplets_in_range(start, end):
    return set([(a, b, c) for c in range(start, end + 1) for b in range(start, c + 1) for a in range(start, b) if a**2 + b**2 == c**2])


def is_triplet(t):
    a = t[0]
    b = t[1]
    c = t[2]
    return (
        a**2 + b**2 == c**2 or
        b**2 + c**2 == a**2 or
        a**2 + c**2 == b**2
    )
