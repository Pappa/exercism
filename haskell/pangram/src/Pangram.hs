module Pangram (isPangram) where

import Data.Char (isAlpha, toLower)
import Data.List (sort, group)

isPangram :: String -> Bool
isPangram text = total >= 26
    where
        letters = filter isAlpha $ map toLower text
        total = length $ group $ sort letters 
