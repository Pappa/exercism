def slices(series, span):
    length = len(series)
    if length < span or span == 0:
        raise ValueError
    else:
        out = []
        ints = [int(i) for i in series]
        return [ints[i:span+i] for i in range(length + 1 - span)]
