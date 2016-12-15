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
    | length (getInvalidChars strand) > 0 = Left e
    | otherwise = Right $ length $ filter (==nucleotide) strand
    where e = "Bork!"

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts strand
    | length strand == 0 = Right $ Map.fromList countMap
    | length (getInvalidChars strand) > 0 = Left "Bork!"
    | otherwise = Right $ Map.fromList $ counts
    where counts :: [(Char, Int)]
          counts = List.map (\(k, v) -> (getCount k strand)) countMap

getInvalidChars :: String -> String
getInvalidChars str = List.filter (not . (`elem` "ACGT")) str

countMap :: [(Char, Int)]
countMap = [ ('A', 0), ('C', 0), ('G', 0), ('T', 0) ]

getCount :: Char -> String -> (Char, Int)
getCount c str
    | isLeft ccount = (c, 0)
    | otherwise = (c, fromRight ccount)
    where ccount = count c str