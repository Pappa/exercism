module Pangram (isPangram) where

import Data.Char (isAlpha, toLower)
import Data.List (sort, group)

isPangram :: String -> Bool
isPangram text
    | length letters >= 26 = True
    | otherwise = False
    where
        letters = group $ sort $ filter isAlpha $ map toLower text
