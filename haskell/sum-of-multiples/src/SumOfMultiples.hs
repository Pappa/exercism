module SumOfMultiples (sumOfMultiples) where

sumOfMultiples :: [Int] -> Int -> Int
sumOfMultiples [] limit = 0
sumOfMultiples factors limit = sum multiples
    where multiples = makeMultiples factors [] limit

makeMultiples :: [Int] -> [Int] -> Int -> [Int] 
makeMultiples [] output limit = output
makeMultiples (x:xs) output limit = makeMultiples xs (output ++ [x, xx..limit]) limit
    where xx = x+x