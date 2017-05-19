from operator import mul

def largest_product(series, span):
	if span > len(series) or span < 0:
		raise ValueError("Invalid span")
	if not span:
		return 1

	ints = [int(c) for c in series]
	l = len(ints)
	products = [ints[idx:span+idx] for idx in range(0, l) if l - idx >= span]

	return max(map(_prod, products))

def _prod(l):
	return reduce(mul, l, 1)
