module Brackets (arePaired) where

import Data.List (isInfixOf)
import Data.List.Split (splitOn)

brackets = ["{}", "[]", "()"]

arePaired :: String -> Bool
arePaired xs = process $ filter (`elem` (concat brackets)) xs

process :: String -> Bool
process [] = True
process input = if isProcessible
	then process output
	else False
    where
        isProcessible = any (`isInfixOf` input) brackets
        output = foldl (\acc br -> (concat $ splitOn br acc)) input brackets