import operator

def sum_of_multiples(limit, nums):
    multiples = [x for n in nums for x in range(n, limit, n)]
    return sum(set(multiples))
