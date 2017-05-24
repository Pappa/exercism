_SQUARES = [1]

for x in range(0, 64):
	_SQUARES.append(_SQUARES[x] * 2)

def on_square(square):
    if not _is_square_valid(square):
    	raise ValueError
    else:
    	return _SQUARES[square - 1]


def total_after(square):
    if not _is_square_valid(square):
    	raise ValueError
    else:
    	return sum(_SQUARES[0:square])

def _is_square_valid(square):
	return square in range(1, 65)
