from re import findall

def abbreviate(txt):
    return ''.join(c.upper() for c in findall(r'(?<![A-Z])[A-Z]|(?<=\W)\w', txt))
