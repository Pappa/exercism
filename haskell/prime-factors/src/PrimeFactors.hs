module PrimeFactors (primeFactors) where

primeFactors :: Integer -> [Integer]
primeFactors n = reverse $ primeFactors' n 2 []

primeFactors' :: Integer -> Integer -> [Integer] -> [Integer]
primeFactors' n x xs
    | n < 2 = xs
    | n `mod` x == 0 = primeFactors' (n `div` x) x (x:xs)
    | otherwise = primeFactors' n (x + 1) xs