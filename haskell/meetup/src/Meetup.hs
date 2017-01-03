module Meetup (Weekday(..), Schedule(..), meetupDay) where

import Data.Time.Calendar (Day, fromGregorian, gregorianMonthLength, addDays)
import Data.Time.Calendar.WeekDate (toWeekDate)

data Schedule = First
              | Second
              | Third
              | Fourth
              | Last
              | Teenth
              deriving (Enum)

data Weekday = Monday
             | Tuesday
             | Wednesday
             | Thursday
             | Friday
             | Saturday
             | Sunday
             deriving (Enum, Eq)

type Year = Integer
type Month = Int

meetupDay :: Schedule -> Weekday -> Year -> Month -> Day
meetupDay schedule weekday year month = addDays offset firstOfMonthDay
    where
        firstOfMonthDay = getFirstOfMonthDay year month
        daysInMonth = gregorianMonthLength year month
        firstDayOfWeekOffset = getFirstDayOfWeekOffset schedule year month
        firstDayOfWeek = addDays (toInteger firstDayOfWeekOffset) firstOfMonthDay
        (_, _, firstDayOfWeekDayNumber) = toWeekDate firstDayOfWeek
        firstDayOfWeekDay :: Weekday
        firstDayOfWeekDay = toEnum (firstDayOfWeekDayNumber - 1)
        dayOffset = getDayOffset weekday firstDayOfWeekDay 0
        offset = toInteger (firstDayOfWeekOffset + (firstDayOfWeekDayNumber - 1) + dayOffset)

getFirstOfMonthDay :: Year -> Month -> Day
getFirstOfMonthDay year month = fromGregorian year month 1

getFirstDayOfWeekOffset :: Schedule -> Year -> Month -> Int
getFirstDayOfWeekOffset schedule year month = case schedule of
    First -> 0
    Second -> 7
    Third -> 14
    Fourth -> 21
    Last -> (gregorianMonthLength year month) - 7
    Teenth -> 12

getDayOffset :: Weekday -> Weekday -> Int -> Int
getDayOffset targetDay startDay i
    | targetDay == startDay = i
    | otherwise = getDayOffset targetDay (nextDay startDay) (i + 1)

nextDay :: Weekday -> Weekday
nextDay Sunday = Monday
nextDay b = succ b