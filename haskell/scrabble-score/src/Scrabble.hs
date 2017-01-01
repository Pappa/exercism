module Scrabble (scoreLetter, scoreWord) where

import Data.List (find)
import Data.Maybe (isNothing, fromJust)
import Data.Char (toUpper)

scoreLetter :: Char -> Int
scoreLetter letter
    | isNothing score = 0
    | otherwise = snd $ fromJust score
    where score = find (\t -> (toUpper letter) `elem` (fst t)) scores

scoreWord word = sum $ fmap scoreLetter word

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
