module Atbash (decode, encode) where

import Data.Char (toLower, isAlphaNum)
import qualified Data.Map as M (Map, fromList, lookup)
import Data.Maybe (mapMaybe)
import Data.List.Split (chunksOf)

letters = ['a'..'z']
numbers = ['0'..'9']
chars = letters ++ numbers
atbash = M.fromList $ zip chars $ (reverse letters) ++ numbers

decode :: String -> String
decode input = mapMaybe (`M.lookup` atbash) filtered
  where
    filtered = filter isAlphaNum $ map toLower input

encode :: String -> String
encode input = unwords $ chunksOf 5 $ decode input
