SUBLIST = 'sub'
SUPERLIST = 'sup'
EQUAL = 'eq'
UNEQUAL = 'uneq'

def check_lists(first, second):
    if _equal(first, second):
        return EQUAL
    elif _contains(first, second):
        return SUBLIST
    elif _contains(second, first):
        return SUPERLIST
    return UNEQUAL

def _equal(first, second):
	l = len(first)
	return l == len(second) and all(first[i] == second[i] for i in range(l))

def _contains(needle, haystack):
	return '#'.join([str(i) for i in needle]) in '#'.join([str(i) for i in haystack])