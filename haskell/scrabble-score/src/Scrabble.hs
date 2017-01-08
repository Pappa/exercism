module Scrabble (scoreLetter, scoreWord) where

import qualified Data.Map as M (Map, fromList, lookup)
import Data.Maybe (isNothing, fromJust)
import Data.Char (toUpper)

scoreLetter :: Char -> Int
scoreLetter letter
    | isNothing score = 0
    | otherwise = fromJust score
    where score = M.lookup (toUpper letter) scores

scoreWord word = sum $ fmap scoreLetter word

scores :: M.Map Char Int
scores = M.fromList $ concat $ map (\(str,score) -> (map (\s -> (s, score)) str)) [
    ("AEIOULNRST", 1 :: Int),
    ("DG", 2),
    ("BCMP", 3),
    ("FHVWY", 4),
    ("K", 5),
    ("JX", 8),
    ("QZ", 10)
    ]
