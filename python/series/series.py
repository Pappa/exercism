def slices(series, span):
    length = len(series)
    if length < span or span == 0:
        raise ValueError
    else:
        out = []
        ints = [int(i) for i in series]
        return [ints[idx:span+idx] for idx in range(length + 1 - span)]
