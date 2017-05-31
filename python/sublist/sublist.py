SUBLIST = 'sub'
SUPERLIST = 'sup'
EQUAL = 'eq'
UNEQUAL = 'uneq'

def check_lists(first, second):
    if first == second:
        return EQUAL
    elif _contains(first, second):
        return SUBLIST
    elif _contains(second, first):
        return SUPERLIST
    return UNEQUAL

def _contains(needle, haystack):
	span = len(needle)
	r = len(haystack) - span + 1
	return any(True for idx in range(r) if haystack[idx:span+idx] == needle)