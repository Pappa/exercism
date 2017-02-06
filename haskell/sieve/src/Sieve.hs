module Sieve (primesUpTo) where

primesUpTo :: Integer -> [Integer]
primesUpTo x
    | x < 2 = []
    | x == 2 = [2]
    | otherwise = []