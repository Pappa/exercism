def on_square(square):
    _raise_if_invalid(square)
    return 2 ** (square - 1)

def total_after(square):
    _raise_if_invalid(square)
    return sum([ 2 ** x for x in range(0, square) ])

def _raise_if_invalid(square):
	if not square in range(1, 65):
		raise ValueError('Square out of range')
