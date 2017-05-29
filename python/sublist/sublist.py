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
	return '#'.join(map(str, needle)) in '#'.join(map(str, haystack))