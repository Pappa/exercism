def sieve(num):
    limit = num + 1
    multiples = set()
    primes = []
    for n in range(2, limit):
        if n not in multiples:
            primes.append(n)
            for multiple in range(n ** 2, limit, n):
                multiples.add(multiple)
    return primes