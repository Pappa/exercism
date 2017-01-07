module Series (largestProduct) where

import Data.Char (digitToInt, isDigit)

largestProduct :: Int -> String -> Maybe Int
largestProduct 0 _ = Just 1
largestProduct span str
    | span < 2 = Nothing
    | length str < span = Nothing
    | not $ all isDigit str = Nothing
    | otherwise = Just $ largestProduct' span str 0

largestProduct' :: Int -> String -> Int -> Int
largestProduct' span str@(x:xs) pr
    | length str == span = l
    | otherwise = largestProduct' span xs l
    where
    	p = prod $ take span str
    	l = if p > pr then p else pr

prod :: String -> Int
prod str = product $ map digitToInt str
