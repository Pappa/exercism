import operator

def sum_of_multiples(limit, nums):
    return sum({x for n in nums for x in range(n, limit, n)})
