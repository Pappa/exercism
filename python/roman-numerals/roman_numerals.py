def numeral(arabic):
    acc = ''
    while arabic:
        for n, symbol in numerals:
            if n <= arabic:
                acc += symbol
                arabic -= n
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