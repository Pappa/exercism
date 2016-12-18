module DNA (count, nucleotideCounts) where

import Data.Map (Map)
import qualified Data.Map as Map
import qualified Data.List as List
import Data.Either (isLeft)
import Data.Either.Utils (fromRight)
--import Control.Monad


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
          counts = fmap (\nucleotide -> ((nucleotide, getCount nucleotide strand))) nucleotides

isInvalidStrand :: String -> Bool
isInvalidStrand strand = any isInvalidNucleotide strand

isInvalidNucleotide :: Char -> Bool
isInvalidNucleotide nucleotide = not $ (nucleotide `elem` nucleotides)

nucleotides :: String
nucleotides = "ACGT"

getCount :: Char -> String -> Int
getCount nucleotide strand
    | isLeft nCount = 0
    | otherwise = fromRight nCount
    where nCount = count nucleotide strand