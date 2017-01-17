module Meetup (Weekday(..), Schedule(..), meetupDay) where

import Data.Time.Calendar (Day, fromGregorian, gregorianMonthLength, addDays)
import Data.Time.Calendar.WeekDate (toWeekDate)

data Schedule = First | Second | Third | Fourth | Last | Teenth
              deriving (Enum)

data Weekday = Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday
             deriving (Enum, Eq)

weekLength = length [Monday .. Sunday]

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
            Last -> (gregorianMonthLength year month) - weekLength
            Teenth -> 12
        weekStartDay = addDays (toInteger weekStartOffset) monthStartDay
        (_, _, dayNumber) = toWeekDate weekStartDay
        weekdayOffset = ((fromEnum weekday) - (dayNumber - 1) + weekLength) `mod` weekLength
        totalOffset = toInteger (weekStartOffset + weekdayOffset)