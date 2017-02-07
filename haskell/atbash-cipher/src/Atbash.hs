module Atbash (decode, encode) where

import Data.Char (toLower)
import qualified Data.Map as M (Map, fromList, lookup)
import Data.Maybe (catMaybes)
import Data.List.Split (chunksOf)

alphabet = ['a'..'z']
numbers = ['0'..'9']
alphaNumeric = alphabet ++ numbers
atbashMap = M.fromList $ zip alphaNumeric $ (reverse alphabet) ++ numbers

decode :: String -> String
decode input = convert input

encode :: String -> String
encode input = unwords $ chunksOf 5 $ convert input

convert :: String -> String
convert input = converted
    where
        converted = catMaybes $ map (`M.lookup` atbashMap) filtered
        filtered = filter (`elem` alphaNumeric) $ map toLower input
