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
    | isValidNucleotide nucleotide && all isValidNucleotide strand = Right $ length $ filter (==nucleotide) strand
    | otherwise = Left "Bork!"

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts strand
    | all isValidNucleotide strand = Right $ Map.fromList $ counts
    | otherwise = Left "Bork!"
    where counts :: [(Char, Int)]
          counts = fmap (\nucleotide -> ((nucleotide, getCount nucleotide strand))) nucleotides

isValidNucleotide :: Char -> Bool
isValidNucleotide nucleotide = nucleotide `elem` nucleotides

nucleotides :: String
nucleotides = "ACGT"

getCount :: Char -> String -> Int
getCount nucleotide strand
    | isLeft nCount = 0
    | otherwise = fromRight nCount
    where nCount = count nucleotide strand