module Prime (nth) where

import Data.Numbers.Primes(primes)

nth :: Integer -> Maybe Integer
nth n
    | n < 1 = Nothing
    | otherwise = Just $ head $ drop (fromIntegral n-1) primes
