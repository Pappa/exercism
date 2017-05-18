def slices(series, length):
    if len(series) < length or length == 0:
    	raise ValueError
    else:
    	out = []
    	ints = [int(i) for i in series]
    	for idx in range(0, len(ints)):
    		if len(ints) - idx >= length:
    			out.append(ints[idx:length+idx])
    	return out
