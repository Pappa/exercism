import string

lower = string.ascii_lowercase
upper = string.ascii_uppercase

def rotate(letters, rotation):
	mapped = [__map(l, rotation) if l.isalpha() else l for l in letters]
	return ''.join(mapped)

def __map(letter, rotation):
	alphabet = (lower, upper)[letter.isupper()]
	for i, c in enumerate(alphabet):
		if c == letter:
			index = (i + rotation) % len(alphabet)
			return alphabet[index]
