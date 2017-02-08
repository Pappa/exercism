module CryptoSquare (encode) where

import Data.Char (toLower, isAlphaNum)
import Data.List (transpose)
import Data.List.Split (chunksOf)

encode :: String -> String
encode input = unwords $ map strip reordered 
  where
    filtered = strip $ map toLower input
    size = getSize 1 filtered 
    chunked = chunksOf size filtered
    reordered = transpose $ map (rPad size) chunked

getSize :: Int -> String -> Int
getSize n str
    | n^2 == l = n
    | n^2 > l && l < n * (n + 1) = n
    | otherwise = getSize (n + 1) str
    where
        l = length str

rPad :: Int -> String -> String
rPad n str
    | length str == n = str
    | otherwise = rPad n (str ++ " ")

strip :: String -> String
strip = filter isAlphaNum