import re

def word_count(input):
    word_map = {}
    str = re.sub(r"[!&@$%^&:.?]+", "", input)
    str = re.sub(r"[,_]", " ", str)
    words = str.lower().split()
    for word in words:
        if word in word_map:
            word_map[word] += 1
        else:
            word_map[word] = 1
    return word_map

