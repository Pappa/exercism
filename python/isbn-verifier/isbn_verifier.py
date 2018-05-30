def verify(isbn):
    chars = [c for c in isbn if c.isdigit() or c == 'X']
    if len(chars) != 10:
        return False

    digits = [int(c) if c.isdigit() else 10 for idx, c in enumerate(chars) if c.isdigit() or (c == 'X' and idx == 9)]
    multipliers = range(1, 11)[::-1]

    return sum([d * m for (d, m) in zip(digits, multipliers)]) % 11 == 0
