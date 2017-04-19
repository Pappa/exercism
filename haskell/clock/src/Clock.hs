module Clock (clockHour, clockMin, fromHourMin, toString) where

import Text.Printf (printf)

hour :: Integer
hour = 60

day :: Integer
day = 1440

data Clock = Clock Integer deriving (Eq, Show)

instance Num Clock where
    negate (Clock c) = Clock $ day - c
    fromInteger = fromHourMin 0
    (+) (Clock c1) (Clock c2) = fromInteger $ c1 + c2
    (*) (Clock c1) (Clock c2) = fromInteger $ c1 * c2
    abs = id
    signum _ = 1

clockHour :: Clock -> Integer
clockHour (Clock c) = c `div` hour

clockMin :: Clock -> Integer
clockMin (Clock c) = c `mod` hour

fromHourMin :: Integer -> Integer -> Clock
fromHourMin h m = Clock ((h * hour + m) `mod` day)

toString :: Clock -> String
toString (Clock c) = printf "%02d:%02d" d m
    where (d, m) = divMod c hour
