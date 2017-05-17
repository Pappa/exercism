def detect_anagrams(txt, candidates):
    return [c for c in candidates if __is_anagram(c, txt)]

def __is_anagram(a, b):
    return (
        a.lower() != b.lower() and
        __sort(a) == __sort(b)
    )

def __sort(txt):
    return ''.join(sorted(txt.lower()))