module Series (largestProduct) where

import Data.Char (digitToInt, isDigit)
import Data.Maybe (fromMaybe)

largestProduct :: Int -> String -> Maybe Int
largestProduct 0 _ = Just 1
largestProduct span str
    | span < 2 = Nothing
    | length str < span = Nothing
    | not $ all isDigit str = Nothing
    | length str == span = Just $ prod str
    | otherwise = Just $ max (prod $ take span str) n
    	where 
    	    prod str = product $ map digitToInt str
    	    n = fromMaybe 0 $ largestProduct span $ tail str
