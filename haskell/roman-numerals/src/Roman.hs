module Roman (numerals) where

import Data.List (find)
import Data.Maybe (fromMaybe)

numerals :: Int -> Maybe String
numerals n
    | n < 1 || n > 3000 = Nothing
    | otherwise = Just $ numerals' n ""


numerals' :: Int -> String -> String
numerals' n s
    | n == 4 = s ++ "IV"
    | n == 9 = s ++ "IX"
    | n `elem` [40..49] = numerals' (n - 40) (s ++ "XL")
    | n `elem` [90..99] = numerals' (n - 90) (s ++ "XC")
    | n `elem` [400..499] = numerals' (n - 400) (s ++ "CD")
    | n `elem` [900..999] = numerals' (n - 900) (s ++ "CM")
    | r > 0 = numerals' r (s ++ x)
    | otherwise = s ++ x
    where (x, r) = repeater n

repeater :: Int -> (String, Int)
repeater n = (x, r)
    where 
        (q, r) = quotRem n i
        x = replicate q c
        (i, c) = fromMaybe (1, 'I') (find ((n>=) . fst) nums)

nums :: [(Int, Char)]
nums = [(1000, 'M'), (500, 'D'), (100, 'C'), (50, 'L'), (10, 'X'), (5, 'V')]
