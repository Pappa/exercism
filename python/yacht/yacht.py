# Score categories
# Change the values as you see fit
YACHT = lambda  d, ds: 50 if len(ds) == 1 else 0
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = lambda d, ds: sum(d) if len(ds) == 2 and any(d.count(n) == 3 for n in ds) else 0
FOUR_OF_A_KIND = lambda d, ds: sum(n * 4 for n in ds if d.count(n) >= 4)
LITTLE_STRAIGHT = lambda  d, ds: 30 if len(ds) == 5 and 6 not in ds else 0
BIG_STRAIGHT = lambda  d, ds: 30 if len(ds) == 5 and 1 not in ds else 0
CHOICE = lambda  d, ds: sum(d)


def score(dice, category):
    ds = set(dice)

    if category in [ONES, TWOS, THREES, FOURS, FIVES, SIXES]:
        return sum([x for x in dice if x == category])
    else:
        return category(dice, ds)

def counts(dice):
    return  { x: dice.count(x) for x in dice }