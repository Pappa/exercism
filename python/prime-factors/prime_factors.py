def prime_factors(n):
    results = []
    i = 2
    while n > 1:
        if n % i == 0:
            results.append(i)
            n = n / i
        else:
            i += 1
    return results

