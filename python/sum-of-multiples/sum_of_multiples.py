import operator

def sum_of_multiples(limit, nums):
    multiples = map(lambda n: range(n, limit, n), nums)
    multiples = reduce(operator.add, multiples, [])
    return sum(set(multiples))
