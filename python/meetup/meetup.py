from datetime import date, timedelta
from calendar import monthrange

class MeetupDayException(BaseException):
    '''Raise when my specific value is wrong'''

def meetup_day(year, month, day, week):
	month_start = date(year, month, 1)
	if week == 'teenth':
		week_start = date(year, month, 13)
		return __get_first_day_with_name(week_start, day)
	else:
		first_day_with_name = __get_first_day_with_name(month_start, day)
		if week == '1st':
			return first_day_with_name
		elif week == '2nd':
			return first_day_with_name + timedelta(days=7)
		elif week == '3rd':
			return first_day_with_name + timedelta(days=14)
		elif week == '4th':
			return first_day_with_name + timedelta(days=21)
		elif week == '5th':
			new_date = first_day_with_name + timedelta(days=28)
			if new_date.month == month:
				return new_date
			else:
				raise MeetupDayException
		elif week == 'last':
			return __get_last_day_with_name(year, month, day)

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


day_map = {
	'Monday': 0,
	'Tuesday': 1,
	'Wednesday': 2,
	'Thursday': 3,
	'Friday': 4,
	'Saturday': 5,
	'Sunday': 6
}