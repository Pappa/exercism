module Meetup (Weekday(..), Schedule(..), meetupDay) where

import Data.Time.Calendar (Day, fromGregorian, gregorianMonthLength)

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
             deriving (Enum)

type Year = Integer
type Month = Int

meetupDay :: Schedule -> Weekday -> Year -> Month -> Day
meetupDay schedule weekday year month = applyNTimes (firstDayOfWeekOffset + weekdayOffset -1) succ firstOfMonth
    where
        firstOfMonth = fromGregorian year month 1
        daysInMonth = gregorianMonthLength year month
        firstDayOfWeekOffset = case schedule of
            First -> 1
            Second -> 8
            Third -> 15
            Fourth -> 22
            Last -> daysInMonth - 7
            Teenth -> 13
        weekdayOffset = case weekday of
            Monday -> 0
            Tuesday -> 1
            Wednesday -> 2
            Thursday -> 3
            Friday -> 4
            Saturday -> 5
            Sunday -> 6

applyNTimes :: Int -> (a -> a) -> a -> a
applyNTimes 0 _ val = val
applyNTimes n f val = foldl (\s e -> e s) val [f | x <- [1..n]]