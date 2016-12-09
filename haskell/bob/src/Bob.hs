module Bob (responseFor) where

import Data.Char
import Data.List

responseFor :: String -> String
responseFor str
    | last str == head "?"     = "Sure."
    | all isUpper str          = "Whoa, chill out!"
    | str == "Bob"             = "Fine. Be that way!"
    | otherwise                = "Whatever."
