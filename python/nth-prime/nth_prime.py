def nth_prime(n):
	if n < 1: raise ValueError
	candidate = 2
	primes = []
	while len(primes) < n:
		if is_prime(candidate):
			primes.append(candidate)
		candidate += 1
	return primes.pop()


def is_prime(n):
	for i in [2, 3, 5, 7, 9]:
		if (n % i == 0):
			return n == i
	return all(False for i in range(11, n, 2) if (n % i == 0))

