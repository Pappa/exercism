from itertools import groupby
from re import sub

def decode(input):
    return sub(r'(\d+)(\D)', __duplicate, input)

def encode(input):
    colated = [__count(group)+key for key, group in groupby(list(input))]
    return ''.join(colated)

def __count(group):
	n = len(list(group))
	return (str(n), '')[n == 1]

def __duplicate(input):
	return input.group(2) * int(input.group(1))