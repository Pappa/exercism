module Bob (responseFor) where

import Data.Char
import Data.List

responseFor :: String -> String
responseFor str
    | length letters > 0 && all isUpper letters     = "Whoa, chill out!"
    | length trimmed > 0 && isLastChar trimmed "?"  = "Sure."
    | trimmed == ""  || (removeSpaces str) == ""    = "Fine. Be that way!"
    | otherwise                                     = "Whatever."
    where letters = removePunctuation str
          trimmed = trim str


isLastChar :: String -> String -> Bool
isLastChar h n
    | last h == head n = True
    | otherwise        = False

removePunctuation :: String -> String
removePunctuation str =
    filter (`elem` ['a'..'z'] ++ ['A'..'Z']) str

removeSpaces :: String -> String
removeSpaces str = 
    filter (not . (`elem` " \n\t")) str

trim :: String -> String
trim = f . f
    where f = reverse . dropWhile isSpace