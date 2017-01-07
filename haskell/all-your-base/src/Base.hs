module Base (rebase, calc) where

import Data.List (any)

rebase :: Integral a => a -> a -> [a] -> Maybe [a]
rebase inputBase outputBase inputDigits
    | inputBase < 2 || outputBase < 2 = Nothing
    | isInvalid = Nothing
    | inputDigits == [] || inputDigits == [0] = Just []
    | otherwise = Just $ rebase' n outputBase []
    where
    	n = calc inputDigits inputBase 0
    	isInvalid  = any (< 0) inputDigits 
    	          || any (>= inputBase) inputDigits

rebase' :: Integral a => a -> a -> [a] -> [a]
rebase' n base acc
    | n == 0 = acc
    | n < base = n:acc
    | otherwise = rebase' d base (m:acc)
    where (d, m) = divMod n base

calc :: Integral a => [a] -> a -> a -> a
calc [] _ i = i
calc (x:xs) base i = calc xs base (i + (x * base^(length xs)))