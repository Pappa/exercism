def nth_prime(n):
    if n > 0:
    	candidate = 2
    	primes = []
    	while len(primes) < n:
    		if is_prime(candidate):
    			primes.append(candidate)
    		candidate += 1
    	return primes.pop()
    else:
    	raise ValueError('Value out of range')


def is_prime(n):
	for i in [2, 3, 5, 7, 9]:
		if (n % i == 0):
			return n == i
	return all(False for i in range(11, n) if (n % i == 0))

