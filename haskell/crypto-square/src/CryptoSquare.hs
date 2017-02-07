module CryptoSquare (encode) where

import Data.Char (toLower)
import Data.List (transpose)
import Data.List.Split (chunksOf)

chars = ['a'..'z']

encode :: String -> String
encode input = unwords $ transpose chunked
  where
    size = 2
    filtered = filter (`elem` chars) $ map toLower input
    chunked = chunksOf size filtered

