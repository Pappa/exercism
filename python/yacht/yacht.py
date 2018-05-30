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
    dice_set = set(dice)
    dice_counts = counts(dice)

    if category == YACHT:
        return calculateYacht(dice_set)
    elif category == CHOICE:
        return sum(dice)
    elif category == BIG_STRAIGHT:
        return calculateBigStraight(dice_set)
    elif category == LITTLE_STRAIGHT:
        return calculateLittleStraight(dice_set)
    elif category in [ONES, TWOS, THREES, FOURS, FIVES, SIXES]:
        return sum([x for x in dice if x == category])
    elif category == FULL_HOUSE:
        return calculateFullHouse(dice, dice_set, dice_counts)
    elif category == FOUR_OF_A_KIND:
        return calculateFourOfAKind(dice_set, dice_counts)
    else:
        return 0


def calculateYacht(dice_set):
    if len(dice_set) == 1:
        return 50
    else:
        return 0

def calculateBigStraight(dice_set):
    if len(dice_set) == 5 and 1 not in dice_set:
        return 30
    else:
        return 0

def calculateLittleStraight(dice_set):
    if len(dice_set) == 5 and 6 not in dice_set:
        return 30
    else:
        return 0

def calculateFullHouse(dice, dice_set, dice_counts):
    if len(dice_set) == 2 and all(count > 1 for count in dice_counts.values()):
        return sum(dice)
    else:
        return 0


def calculateFourOfAKind(dice_set, dice_counts):
    if len(dice_set) <= 2 and any(count >= 4 for count in dice_counts.values()):
        return [n for n, c in dice_counts.items() if c >= 4][0] * 4
    else:
        return 0

def counts(dice):
    return  { x: dice.count(x) for x in dice }