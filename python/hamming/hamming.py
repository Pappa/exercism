def distance(strand1, strand2):
	n1 = list(strand1)
	n2 = list(strand2)
	acc = 0

	if len(n1) == len(n2):
		for index in range(len(n1)):
			if n1[index] != n2[index]:
				acc += 1
		return acc
	else:
		raise ValueError()