const WEEK_START = {
    '1st': 1,
    '2nd': 8,
    '3rd': 15,
    '4th': 22,
    '5th': 29,
    'teenth': 13
};

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getLastWeekStart = (year, month) => {
    return new Date(year, month + 1, 0).getDate() - 6;
};

module.exports = (year, month, day, descriptor) => {
    const weekStart = (descriptor === 'last') ? getLastWeekStart(year, month) : WEEK_START[descriptor];
    const weekStartDate = new Date(year, month, weekStart);
    console.log('weekStartDate', weekStartDate.toString());
    const weekStartDay = weekStartDate.getDay();
    const dayNumber = DAYS.indexOf(day);
    const dayOffset = (dayNumber >= weekStartDay) ? dayNumber - weekStartDay : dayNumber + (6 - weekStartDay);
    console.log('weekStartDay', weekStartDay, 'dayNumber', dayNumber, 'dayOffset', dayOffset);
    let result = new Date(year, month);
    result.setDate(weekStartDate.getDate() + dayOffset);
    return result;
};

