from datetime import date, timedelta
from calendar import monthrange

class MeetupDayException(BaseException):
    '''Raise when my specific value is wrong'''

def meetup_day(year, month, day, week):
	month_start = date(year, month, 1)
	first_day_with_name = __get_first_day_with_name(month_start, day)
	if week == 'teenth':
		week_start = date(year, month, 13)
		return __get_first_day_with_name(week_start, day)
	elif week == 'last':
		return __get_last_day_with_name(year, month, day)
	else:
		new_date = first_day_with_name + timedelta(days=delta_map[week])
		if new_date.month == month:
			return new_date
		else:
			raise MeetupDayException

def __get_first_day_with_name(start, day):
	day_number = day_map[day]
	start_day_number = start.weekday()
	offset = (day_number - start_day_number + 7) % 7
	return start + timedelta(days=offset)


def __get_last_day_with_name(year, month, day):
	start_day, length = monthrange(year, month)
	last_day = date(year, month, length)
	last_day_number = last_day.weekday()
	day_number = day_map[day]
	offset = (last_day_number - day_number + 7) % 7
	return last_day - timedelta(days=offset)

delta_map = {
	'1st': 0,
	'2nd': 7,
	'3rd': 14,
	'4th': 21,
	'5th': 28
}

day_map = {
	'Monday': 0,
	'Tuesday': 1,
	'Wednesday': 2,
	'Thursday': 3,
	'Friday': 4,
	'Saturday': 5,
	'Sunday': 6
}