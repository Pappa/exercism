module PrimeFactors (primeFactors) where

primeFactors :: Integer -> [Integer]
primeFactors n
    | n < 2 = []
    | otherwise = reverse $ primeFactors' n [2..n] []

primeFactors' :: Integer -> [Integer] -> [Integer] -> [Integer]
primeFactors' n [] output = output
primeFactors' n input@(x:xs) output
    | q > 0 && r == 0 = primeFactors' q input (x:output)
    | otherwise = primeFactors' n xs output
    where (q, r) = quotRem n x