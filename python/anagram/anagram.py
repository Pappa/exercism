def detect_anagrams(txt, candidates):
    return [c for c in candidates if _is_anagram(c, txt)]

def _is_anagram(a, b):
    return (
        a.lower() != b.lower() and
        _sort(a) == _sort(b)
    )

def _sort(txt):
    return ''.join(sorted(txt.lower()))