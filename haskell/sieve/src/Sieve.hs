module Sieve (primesUpTo) where

primesUpTo :: Integer -> [Integer]
primesUpTo x
    | x < 2 = []
    | otherwise = seive [2..x] []
    where 
		seive :: [Integer] -> [Integer] -> [Integer]
		seive [] acc = acc
		seive xxs@(x:xs) acc = seive seived (acc ++ [x])
			where
				seived = filter ((/=0) . (`mod` x)) xxs