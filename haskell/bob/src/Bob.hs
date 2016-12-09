module Bob (responseFor) where

import Data.Char
import Data.List

responseFor :: String -> String
responseFor str
    | isLastChar str "?"                      = "Sure."
    | (all isUpper str || isLastChar str "1") = "Whoa, chill out!"
    | str == ""                               = "Fine. Be that way!"
    | otherwise                               = "Whatever."


isLastChar :: String -> String -> Bool
isLastChar h n
    | last h == head n = True
    | otherwise        = False
