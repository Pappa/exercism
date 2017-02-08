module CryptoSquare (encode) where

import Data.Char (toLower)
import Data.List (transpose)
import Data.List.Split (chunksOf)

chars = ['a'..'z']

encode :: String -> String
encode input = unwords $ transpose chunked
  where
    filtered = filter (`elem` chars) $ map toLower input
    chunked = chunksOf (size filtered 1) filtered

size :: String -> Int -> Int
size str n
    | n * n == l = n
    | n * n < l && n * (n + 1) > l = n
    | otherwise = size str (n + 1)
    where
        l = length str

