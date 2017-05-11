from datetime import timedelta

def add_gigasecond(date):
    gigasecond = 1e9
    return date + timedelta(seconds=gigasecond)
