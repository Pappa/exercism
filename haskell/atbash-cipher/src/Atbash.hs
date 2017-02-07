module Atbash (decode, encode) where

import Data.Char (toLower)
import qualified Data.Map as M (Map, fromList, lookup)
import Data.Maybe (catMaybes)
import Data.List.Split (chunksOf)

alphabet = ['a'..'z']
numbers = ['0'..'9']
chars = alphabet ++ numbers
atbash = M.fromList $ zip chars $ (reverse alphabet) ++ numbers

decode :: String -> String
decode input = converted
  where
    converted = catMaybes $ map (`M.lookup` atbash) filtered
    filtered = filter (`elem` chars) $ map toLower input

encode :: String -> String
encode input = unwords $ chunksOf 5 $ decode input
