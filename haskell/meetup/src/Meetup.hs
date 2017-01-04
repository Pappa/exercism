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
             deriving (Enum, Eq, Show)

type Year = Integer
type Month = Int

meetupDay :: Schedule -> Weekday -> Year -> Month -> Day
meetupDay schedule weekday year month = addDays totalOffset monthStartDay
    where
        monthStartDay = fromGregorian year month 1
        weekStartOffset = case schedule of
            First -> 0
            Second -> 7
            Third -> 14
            Fourth -> 21
            Last -> (gregorianMonthLength year month) - 7
            Teenth -> 12
        weekStartDay = addDays (toInteger weekStartOffset) monthStartDay
        (_, _, dayNumber) = toWeekDate weekStartDay
        weekStartDayName = toEnum (dayNumber - 1) :: Weekday
        weekdayOffset = getDayOffset weekday weekStartDayName 0
        totalOffset = toInteger (weekStartOffset + weekdayOffset)

getDayOffset :: Weekday -> Weekday -> Int -> Int
getDayOffset targetDay startDay i
    | targetDay == startDay = i
    | otherwise = getDayOffset targetDay (nextDay startDay) (i + 1)

nextDay :: Weekday -> Weekday
nextDay Sunday = Monday
nextDay b = succ b