from string import ascii_lowercase

alphabet = ascii_lowercase
tebahpla = list(ascii_lowercase)
tebahpla.reverse()

alphabet_map = dict(zip(alphabet, tebahpla))

def encode(txt):
    txt = [c.lower() for c in txt if c.isalnum()]
    return __add_spaces(__transpose(txt))

def decode(txt):
    txt = [c for c in txt if c.isalnum()]
    return __transpose(txt)

def __transpose(txt):
	return ''.join([alphabet_map[c] if c.isalpha() else c for c in txt])

def __add_spaces(txt):
	return ' '.join(txt[i:i+5] for i in range(0, len(txt), 5))
