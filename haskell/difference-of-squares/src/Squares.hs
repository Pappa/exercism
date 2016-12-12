module Squares (difference, squareOfSums, sumOfSquares) where

difference :: Integral a => a -> a
difference num
    | a > b = a - b
    | b > a = b - a
    | otherwise = 0
    where a = squareOfSums num
          b = sumOfSquares num

squareOfSums :: Integral a => a -> a
squareOfSums num = square $ sum [0..num]

sumOfSquares :: Integral a => a -> a
sumOfSquares num = sum $ map square [0..num]

square :: Integral a => a -> a
square num = num * num