text = """{0} bottle{2} of beer on the wall, {0} bottle{2} of beer.
Take {4} down and pass it around, {1} bottle{3} of beer on the wall.
"""

zero = """No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
"""

def verse(n):
    if n > 0:
        bottles1 = str(n)
        bottles2 = [str(n - 1), "no more"][n == 1]
        plural1 = ["s", ""][n == 1]
        plural2 = ["s", ""][n == 2]
        num = ["one", "it"][n == 1]
        return text.format(bottles1, bottles2, plural1, plural2, num)
    return zero


def song(start, end=0):
    out = ""
    for i in range(start, end-1, -1):
        out += verse(i)
        out += "\n"
    return out
