module Series (largestProduct) where

import Data.Char (digitToInt, isDigit)

largestProduct :: Int -> String -> Maybe Int
largestProduct 0 _ = Just 1
largestProduct span str
    | span < 2 = Nothing
    | length str < span = Nothing
    | not $ all isDigit str = Nothing
    | length str == span = Just $ prod str
    | otherwise = do
    	xs <- largestProduct span $ tail str
    	Just $ max (prod $ take span str) xs
    	where
    		prod str = product $ map digitToInt str
