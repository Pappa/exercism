def is_armstrong(number):
    digits = [int(c) for c in str(number)]
    pow = len(digits)
    return sum([d ** pow for d in digits]) == number
