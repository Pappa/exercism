def numeral(arabic):
    acc = ''
    while arabic:
        for n, symbol in numerals:
            dup, _ = ((1, None), divmod(arabic, n))[len(symbol) > 1]
            if n <= arabic:
                acc += symbol * dup
                arabic -= n * dup
                break
    return acc

numerals = [
    (1000, 'M'),
    (900, 'CM'),
    (500, 'D'),
    (400, 'CD'),
    (100, 'C'),
    (90, 'XC'),
    (50, 'L'),
    (40, 'XL'),
    (10, 'X'),
    (9, 'IX'),
    (5, 'V'),
    (4, 'IV'),
    (1, 'I')
]