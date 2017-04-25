module Acronym (abbreviate) where


import Data.Char (isLower, isUpper, isAlpha, toUpper)

abbreviate :: String -> String
abbreviate xs = abbreviate' xs [] ""

abbreviate' :: String -> [String] -> String -> String
abbreviate' [] acc word = map toUpper $ map head (acc ++ [word]) 
abbreviate' xxs@(x:xs) acc word = abbreviate' str words current
    where
        isBoundary = (length word > 0) 
            && (isUpper x) 
            && (isLower $ last word)
        current = if not isBoundary && isAlpha x
            then word ++ [x]
            else ""
        words = if not isBoundary 
                && (isAlpha x || length word == 0)
            then acc
            else acc ++ [word]
        str = if isBoundary then xxs else xs