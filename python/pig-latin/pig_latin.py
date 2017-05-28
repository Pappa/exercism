from string import ascii_lowercase

vowels = set(['a', 'e', 'i', 'o', 'u'])
consonants = set(ascii_lowercase) - vowels

def translate(phrase):
    return ' '.join([translate_word(word) for word in phrase.split()])

def translate_word(word):
    if word[0:3] in ['squ', 'sch', 'thr']:
        word =  word[3:] + word[0:3]
    if word[0:2] not in ['yt', 'xr']:
        if ((word[0] in consonants
        	and word[1] in consonants)
        	or word[0:2]  == 'qu'):
            word =  word[2:] + word[0:2]
        elif (word[0] in consonants):
            word =  word[1:] + word[0]
    return word + 'ay'