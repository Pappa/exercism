module DNA (count, nucleotideCounts) where

import Data.Map (Map)
import qualified Data.Map as Map
import qualified Data.List as List
import Data.Maybe (fromMaybe)

count :: Char -> String -> Either String Int
count _ [] = Right 0
count nucleotide strand
    | value >= 0 = Right $ value
    | otherwise = Left "Bork!"
    where value :: Int
          value = fromMaybe 0 (Map.lookup nucleotide (nucleotideCounts strand))

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts str
    | length invalidChars > 0 = Left "Bork!"
    | otherwise = Right $ counts
    where invalidChars :: String
          invalidChars = List.filter (not . (`elem` "ACGT"))  str
          counts :: (Map Char Int)
          counts = Map.fromList $ List.map (\x -> (head x, length x)) . List.group $ List.sort str


--Data.Map.lookup
--Data.Map.insert
