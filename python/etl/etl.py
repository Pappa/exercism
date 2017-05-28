def transform(legacy):
    return { c.lower(): n for n, chars in legacy.iteritems() for c in chars }