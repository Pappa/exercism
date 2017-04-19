module Pangram (isPangram) where

import Data.Char (isAlpha, toLower)
import Data.List (sort, group)

isPangram :: String -> Bool
isPangram text = count >= 26
    where
        count = length $ group $ sort $ filter isAlpha $ map toLower text
