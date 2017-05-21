def flatten(x):
	if x is None or x is ():
		return []
	elif isinstance(x, list):
		return [v for sub in x for v in flatten(sub)]
	else:
		return [x]