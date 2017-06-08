from math import sqrt

def divisor_generator(n):
    divisors = []
    for i in range(1, int(sqrt(n) + 1)):
        if n % i == 0:
            yield i
            if i * i != n and n / i != n:
                yield n / i

def is_perfect(n):
    return n == sum(divisor_generator(n))