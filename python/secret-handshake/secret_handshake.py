def handshake(n):
    bin_ints = make_bin_ints(n)
    bin_ints.reverse()
    if any(True for i in bin_ints if int(i) > 1 or int(i) < 0):
    	return []
    output = []
    for i, x in enumerate(bin_ints):
        if x > 0 and i < 4:
            output.append(handshake_map[i])
    if len(bin_ints) == 5 and bin_ints[4] == 1:
        output.reverse()
    return output


def code():
    pass


def make_bin_ints(n):
    if isinstance(n, basestring):
    	return [int(x) for x in n]
    elif n < 0:
        return []
    else:
    	return [int(x) for x in format(n, 'b')]

handshake_map = {
    0: "wink",
    1: "double blink",
    2: "close your eyes",
    3: "jump"
}

