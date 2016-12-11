module SumOfMultiples (sumOfMultiples) where

import Data.List

sumOfMultiples :: [Int] -> Int -> Int
sumOfMultiples [] limit = 0
sumOfMultiples factors limit = sum multiples
    where multiples = nub (makeMultiples factors [] limit)

makeMultiples :: [Int] -> [Int] -> Int -> [Int] 
makeMultiples [] output limit = output
makeMultiples (x:xs) output limit = makeMultiples xs (output ++ [x, (x+x)..(limit-1)]) limit