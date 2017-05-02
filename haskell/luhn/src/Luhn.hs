module Luhn (addends, checkDigit, checksum, create, isValid) where

--import Data.Char (digitToInt)

addends :: Integer -> [Integer]
addends n = reverse $ join (o, evens) []
    where
        (o, e) = split (reverse (digs n)) [] []
        evens = map modify e

modify :: Integer -> Integer
modify n
    | x > 9 = x - 9
    | otherwise = x
    where
        x = n * 2

digs :: Integral x => x -> [x]
digs 0 = []
digs x = digs (x `div` 10) ++ [x `mod` 10]

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
checksum n = error "You need to implement this function."

create :: Integer -> Integer
create n = error "You need to implement this function."

isValid :: Integer -> Bool
isValid n = error "You need to implement this function."
