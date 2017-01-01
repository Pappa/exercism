module Scrabble (scoreLetter, scoreWord) where

import Data.List
import Data.Maybe (isNothing, fromJust)
import Data.Char (toUpper)

scoreLetter :: Char -> Int
scoreLetter letter
    | isNothing scoreTuple = 0
    | otherwise = snd $ fromJust scoreTuple
    where scoreTuple = find (findScore letter) scores

findScore :: Char -> (String, Int) -> Bool
findScore letter t = (toUpper letter) `elem` (fst t)

scoreWord word = 0

scores :: [(String, Int)]
scores = [
    ("AEIOULNRST", 1),
    ("DG", 2),
    ("BCMP", 3),
    ("FHVWY", 4),
    ("K", 5),
    ("JX", 8),
    ("QZ", 10)
    ]
