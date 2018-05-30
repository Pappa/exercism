# Score categories
# Change the values as you see fit
YACHT = 'YACHT'
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = 'FULL_HOUSE'
FOUR_OF_A_KIND = 'FOUR_OF_A_KIND'
LITTLE_STRAIGHT = 'LITTLE_STRAIGHT'
BIG_STRAIGHT = 'BIG_STRAIGHT'
CHOICE = 'CHOICE'


def score(dice, category):
    if category == YACHT and isYacht(dice):
        return 50
    if category == CHOICE:
        return sum(dice)
    if category == BIG_STRAIGHT and isBigStraight(dice):
        return 30
    if category == LITTLE_STRAIGHT and isLittleStraight(dice):
        return 30
    if category in [ONES, TWOS, THREES, FOURS, FIVES, SIXES]:
        return sumOfNumber(dice, category)
    if category == FULL_HOUSE and isFullHouse(dice):
        return sum(dice)
    if category == FOUR_OF_A_KIND and isFourOfAKind(dice):
        dice_counts = counts(dice)
        return [n for n, c in dice_counts.items() if c >= 4][0] * 4
    return 0


def isYacht(dice):
    return len(set(dice)) == 1

def isBigStraight(dice):
    dice_set = set(dice)
    return len(dice_set) == 5 and 1 not in dice_set

def isLittleStraight(dice):
    dice_set = set(dice)
    return len(dice_set) == 5 and 6 not in dice_set

def isFullHouse(dice):
    dice_set = set(dice)
    dice_counts = counts(dice)
    return len(dice_set) == 2 and all(count > 1 for count in dice_counts.values())

def isFourOfAKind(dice):
    dice_set = set(dice)
    dice_counts = counts(dice)
    return len(dice_set) <= 2 and any(count >= 4 for count in dice_counts.values())

def sumOfNumber(dice, n):
    return sum([x for x in dice if x == n])

def counts(dice):
    return  { x: dice.count(x) for x in dice }