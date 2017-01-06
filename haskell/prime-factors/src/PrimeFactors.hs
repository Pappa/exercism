module PrimeFactors (primeFactors) where

primeFactors :: Integer -> [Integer]
primeFactors n = reverse $ primeFactors' n 2 []

primeFactors' :: Integer -> Integer -> [Integer] -> [Integer]
primeFactors' n x xs
    | n < 2 = xs
    | m == 0 = primeFactors' d x (x:xs)
    | otherwise = primeFactors' n (x + 1) xs
    where (d, m) = divMod n x