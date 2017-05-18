def sieve(num):
	numbers = range(2, num + 1)
	return __sieve(numbers, [])

def __sieve(numbers, acc):
	if len(numbers) == 0:
		return acc;
	head, tail = numbers[0], numbers[1:]
	sieved = [n for n in tail if n % head != 0]
	acc.append(head)
	return __sieve(sieved, acc)
