def distance(strand1, strand2):
	acc = 0

	if len(strand1) == len(strand2):
		for n1, n2 in zip(strand1, strand2):
			if n1 != n2:
				acc += 1
		return acc
	else:
		raise ValueError()