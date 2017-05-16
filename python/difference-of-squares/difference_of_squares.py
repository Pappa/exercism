def square_of_sum(num):
	nums = range(1, num + 1)
	return __square(sum(nums))

def sum_of_squares(num):
	nums = range(1, num + 1)
	return sum(map(__square, nums))

def difference(num):
	a = square_of_sum(num)
	b = sum_of_squares(num)
	return a - b

def __square(x):
	return x ** 2
