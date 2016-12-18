module DNA (count, nucleotideCounts) where

import Data.Map (Map)
import qualified Data.Map as Map
import qualified Data.List as List
import Data.Either (isLeft)
import Data.Either.Utils (fromRight)


count :: Char -> String -> Either String Int
count _ [] = Right 0
count nucleotide strand
    | (isInvalidNucleotide nucleotide || isInvalidStrand strand) = Left "Bork!"
    | otherwise = Right $ length $ filter (==nucleotide) strand

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts strand
    | isInvalidStrand strand = Left "Bork!"
    | otherwise = Right $ Map.fromList $ counts
    where counts :: [(Char, Int)]
          counts = fmap (\nucleotide -> (getCount nucleotide strand)) nucleotides

isInvalidStrand :: String -> Bool
isInvalidStrand strand = any isInvalidNucleotide strand

isInvalidNucleotide :: Char -> Bool
isInvalidNucleotide nucleotide = not $ (nucleotide `elem` nucleotides)

nucleotides :: String
nucleotides = "ACGT"

getCount :: Char -> String -> (Char, Int)
getCount c str
    | isLeft ccount = (c, 0)
    | otherwise = (c, fromRight ccount)
    where ccount = count c str