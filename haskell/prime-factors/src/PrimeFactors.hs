module PrimeFactors (primeFactors) where

import Data.List (nub)

primeFactors :: Integer -> [Integer]
primeFactors n
    | n < 2 = []
    | otherwise = primeFactors' n [2..n] []


primeFactors' :: Integer -> [Integer] -> [Integer] -> [Integer]
primeFactors' n [] output = output
primeFactors' n input@(x:xs) output
    | r == 0 && q > 0 = primeFactors' n xs (x:output)
    | otherwise = primeFactors' n xs output
    where (q, r) = quotRem n x


