from itertools import dropwhile

def handshake(n):
    bin_ints = make_bin_ints(n)
    bin_ints.reverse()

    output = [handshake_map[i] for i, x in enumerate(bin_ints) if x == 1 and i < 4]

    if len(bin_ints) < 5:
        output.reverse()
    return output


def code(handshake):
	prefix = ''
	values = handshake_map.values()
	values.reverse()
	if not all(h in values for h in handshake):
		return '0'
	values_present = [v for v in values if v in handshake]

	print(handshake, values_present)
	if handshake != values_present:
		handshake.reverse()
		prefix = '1'
	output = [str((0,1)[x in handshake]) for x in values]
	return prefix + ''.join(output).lstrip('0')


def make_bin_ints(n):
    if isinstance(n, basestring):
    	return [int(x) for x in n]
    bin_ints = [int(x) for x in format(n, 'b')]
    if any(True for x in bin_ints if x < 0 or x > 1):
        return [0]
    return bin_ints

handshake_map = {
    0: "jump",
    1: "close your eyes",
    2: "double blink",
    3: "wink"
}

