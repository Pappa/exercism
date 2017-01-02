module Anagram (anagramsFor) where

import Data.List (sort)
import Data.Char (toUpper)

anagramsFor :: String -> [String] -> [String]
anagramsFor word candidates = filter (\w -> (sort $ uppercase w) == sorted && uppercase w /= uWord) candidates
    where uWord = uppercase word
          sorted = sort uWord

uppercase :: String -> String
uppercase = map toUpper
