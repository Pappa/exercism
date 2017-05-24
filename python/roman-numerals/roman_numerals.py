numerals = [(1000, 'M'), (500, 'D'), (100, 'C'), (50, 'L'), (10, 'X'), (5, 'V'), (1, 'I')]
exceptions = [(900, 999, 'CM'), (400, 499, 'CD'), (90, 99, 'XC'), (40, 49, 'XL'), (9, 9, 'IX'), (4, 4, 'IV')]

def numeral(arabic):
	acc = ''
	while arabic > 0:
		if _is_exception(arabic):
			for low, high, symbol in exceptions:
				if arabic >= low and arabic <= high:
					arabic -= low
					acc += symbol
					break
		else:
			for n, symbol in numerals:
				d, m = divmod(arabic, n)
				if d > 0:
					acc += symbol * d
					arabic -= n * d
					break
	return acc

def _is_exception(arabic):
	return next((True for low, high, _ in exceptions if arabic in range(low, high + 1)), False)
