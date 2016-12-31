module RunLength (decode, encode) where

import Data.List
import Data.Char (isDigit, isAlpha)

decode :: String -> String
decode "" = ""
decode input = decodeGroups input "" ""

decodeGroups :: String -> String -> String -> String
decodeGroups "" output _ = output
decodeGroups (x:[]) output _ = output ++ [x]
decodeGroups input@(x:xs) output acc
    | isDigit x && not (isDigit h) = decodeGroups (tail xs) (output ++ (replicate (read c) h)) ""
    | isDigit x && isDigit h = decodeGroups xs output c
    | otherwise = decodeGroups xs (output ++ [x]) ""
    where c = acc ++ [x]
          h = head xs

encode :: String -> String
encode "" = ""
encode input = concat $ fmap encodeGroup $ group input

encodeGroup :: String -> String
encodeGroup input
    | length input == 1 = input
    | otherwise = show (length input) ++ [head input]
