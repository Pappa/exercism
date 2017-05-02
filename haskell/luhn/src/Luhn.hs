module Luhn (addends, checkDigit, checksum, create, isValid) where

--import Data.Char (digitToInt)

addends :: Integer -> [Integer]
addends n = reverse $ join (o, evens) []
    where
        (o, e) = split (reverse (digits n)) [] []
        evens = map modify e
        digits 0 = []
        digits x = digits (x `div` 10) ++ [x `mod` 10]

modify :: Integer -> Integer
modify n
    | x > 9 = x - 9
    | otherwise = x
    where
        x = n * 2

join :: ([t], [t]) -> [t] -> [t]
join ([], []) acc = acc
join (x:[], []) acc = join ([], []) (acc ++ [x])
join (x:xs, y:ys) acc = join (xs, ys) (acc ++ [x] ++ [y])

split :: [t] -> [t] -> [t] -> ([t], [t])
split [] o e = (o, e)
split (x:[]) o e = split [] (o ++ [x]) e
split (x:y:xs) o e = split xs (o ++ [x]) (e ++ [y])

checkDigit :: Integer -> Integer
checkDigit = (`mod` 10)

checksum :: Integer -> Integer
checksum = (`mod` 10) . foldl (+) 0 . addends

create :: Integer -> Integer
create n = error "You need to implement this function."

isValid :: Integer -> Bool
isValid n = ((checksum n) `mod` 10) == 0
