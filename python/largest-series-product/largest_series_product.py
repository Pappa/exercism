from operator import mul

def largest_product(series, span):
	if span > len(series) or span < 0:
		raise ValueError("Invalid span")
	if not span:
		return 1

	ints = [int(c) for c in series]
	r = len(ints) - span + 1
	products = [ints[idx:span+idx] for idx in range(r)]

	return max(map(_prod, products))

def _prod(x):
	return reduce(mul, x, 1)
