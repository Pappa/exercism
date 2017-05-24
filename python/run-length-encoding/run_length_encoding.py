from itertools import groupby
from re import sub

def decode(txt):
    return sub(r'(\d+)(\D)', _duplicate, txt)

def encode(txt):
    colated = [_count(group)+key for key, group in groupby(txt)]
    return ''.join(colated)

def _count(group):
	n = len(list(group))
	return (str(n), '')[n == 1]

def _duplicate(m):
	return m.group(2) * int(m.group(1))