import re

def abbreviate(txt):
    txt = re.sub(r'([a-z])([A-Z])', r'\1 \2', txt)
    txt = re.sub(r'(?i)[^a-z]', ' ', txt) 
    return ''.join([c[0].upper() for c in txt.split()])
