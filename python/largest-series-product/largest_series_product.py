def largest_product(series, span):
	if span > len(series) or span < 0:
		raise ValueError

	ints = [int(c) for c in series]
	products = []

	for idx in range(0, len(ints)):
		if len(ints) - idx >= span:
			products.append(ints[idx:span+idx])

	products = map(lambda l: reduce(_prod, l, 1), products)

	if (len(products)) > 0:
		return max(products)
	return 1


def _prod(x, y):
	return x * y
