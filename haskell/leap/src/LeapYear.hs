module LeapYear (isLeapYear) where

divBy :: Integer -> Integer -> Bool
divBy x y = x `rem` y == 0 

isLeapYear :: Integer -> Bool
isLeapYear year
    | year `divBy` 400 = True
    | year `divBy` 100 = False
    | year `divBy` 4   = True
    | otherwise        = False
    