module Atbash (decode, encode) where

import Data.Char (toLower)
import qualified Data.Map as M (Map, fromList, lookup)
import Data.Maybe (catMaybes)
import Data.List.Split (chunksOf)

letters = ['a'..'z']
numbers = ['0'..'9']
chars = letters ++ numbers
atbash = M.fromList $ zip chars $ (reverse letters) ++ numbers

decode :: String -> String
decode input = catMaybes $ map (`M.lookup` atbash) filtered
  where
    filtered = filter (`elem` chars) $ map toLower input

encode :: String -> String
encode input = unwords $ chunksOf 5 $ decode input
