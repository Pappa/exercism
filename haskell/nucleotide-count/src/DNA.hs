module DNA (count, nucleotideCounts) where

import Data.Map (Map)
import qualified Data.Map as Map
import qualified Data.List as List
import Data.Either (isLeft)
import Data.Either.Utils (fromRight)


count :: Char -> String -> Either String Int
count _ [] = Right 0
count nucleotide strand
    | not $ (nucleotide `elem` strand) = Left e
    | isInvalidStrand strand = Left e
    | otherwise = Right $ length $ filter (==nucleotide) strand
    where e = "Bork!"

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts strand
    | isInvalidStrand strand = Left "Bork!"
    | otherwise = Right $ Map.fromList $ counts
    where counts :: [(Char, Int)]
          counts = List.map (\k -> (getCount k strand)) nucleotides

isInvalidStrand :: String -> Bool
isInvalidStrand strand = List.any (not . (`elem` nucleotides)) strand

nucleotides :: String
nucleotides = "ACGT"

getCount :: Char -> String -> (Char, Int)
getCount c str
    | isLeft ccount = (c, 0)
    | otherwise = (c, fromRight ccount)
    where ccount = count c str