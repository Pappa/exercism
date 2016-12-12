module Squares (difference, squareOfSums, sumOfSquares) where

difference :: Integral a => a -> a
difference num
    | a > b = a - b
    | b > a = b - a
    | otherwise = 0
    where a = squareOfSums num
          b = sumOfSquares num

squareOfSums :: Integral a => a -> a
squareOfSums num = 0

sumOfSquares :: Integral a => a -> a
sumOfSquares num = 0
