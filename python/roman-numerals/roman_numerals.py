def numeral(arabic):
    acc = ''
    while arabic:
        for n, symbol, duplicate in numerals:
            d, _ = ((1, None), divmod(arabic, n))[duplicate]
            if n <= arabic:
                acc += symbol * d
                arabic -= n * d
                break
    return acc

numerals = [
    (1000, 'M', True),
    (900, 'CM', False),
    (500, 'D', False),
    (400, 'CD', False),
    (100, 'C', True),
    (90, 'XC', False),
    (50, 'L', False),
    (40, 'XL', False),
    (10, 'X', True),
    (9, 'IX', False),
    (5, 'V', False),
    (4, 'IV', False),
    (1, 'I', True)
]