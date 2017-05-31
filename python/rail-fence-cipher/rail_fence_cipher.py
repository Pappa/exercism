from math import ceil

def fence_pattern(l, rails):
    zigzag = range(rails) + range(rails - 2, 0, -1)
    length = len(l)
    times = int(ceil(float(length)/rails))
    fence = zigzag * times
    return fence[0:length]


def encode(l, rails):
    fence = fence_pattern(l, rails)
    matrix = [[] for _ in range(rails)]
    for i, item in zip(fence, list(l)):
    	matrix[i].append(item)
    return ''.join(''.join(item for item in row) for row in matrix)


def decode(l, rails):
    fence = fence_pattern(l, rails)
    pass
