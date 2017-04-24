module Acronym (abbreviate) where


import Data.Char (isLower, isUpper, isAlpha, toUpper)

abbreviate :: String -> String
abbreviate xs = abbreviate' xs [] ""

abbreviate' :: String -> [String] -> String -> String
abbreviate' [] acc word = map toUpper $ map head (acc ++ [word]) 
abbreviate' xxs@(x:xs) acc word
    | isNotAlpha && length word == 0 = abbreviate' xs acc ""
    | isNotAlpha = abbreviate' xs (acc ++ [word]) ""
    | isWordBoundary = abbreviate' xxs (acc ++ [word]) ""
    | otherwise = abbreviate' xs acc (word ++ [x])
    where
    	isNotAlpha = not $ isAlpha x
        isWordBoundary = (length word > 0) && (isUpper x) && (isLower $ last word)