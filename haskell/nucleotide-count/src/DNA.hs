module DNA (count, nucleotideCounts) where

import Data.Map (Map)
import qualified Data.Map as Map
import qualified Data.List as List

count :: Char -> String -> Either String Int
count _ [] = Right 0
count nucleotide strand
    | nucleotide == 'A' = Right $ 5
    | otherwise = Left "Bork!"

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts str
    | length invalidChars > 0 = Left str
    | otherwise = Right $ Map.fromList (List.map createTuple $ List.group $ List.sort str)
    where invalidChars :: String
          invalidChars = List.filter (not . (`elem` "ACGT"))  str
          --countMap :: [(Char Int)]
          
--nucleotideCounts str = Map.fromList (List.map createTuple $ group $ sort str)

createTuple :: String -> (Char, Int)
createTuple l = (head l, length l)

--countMap = [ ('A', 0)
-- , ('C', 0)
--, ('G', 0)
-- , ('T', 0) ]



--Data.Map.lookup
--Data.Map.insert
