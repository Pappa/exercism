module Grains (square, total) where

square :: Integer -> Maybe Integer
square n
    | n > 0 && n < 65 = Just ((generateSquares [])!!index)
    | otherwise = Nothing
    where index = (fromIntegral n - 1)

total :: Integer
total = sum $ generateSquares []

generateSquares :: [Integer] -> [Integer]
generateSquares [] = generateSquares [1]
generateSquares squares@(x:_)
    | length squares == 64 = reverse squares
    | otherwise = generateSquares ([(x * 2)] ++ squares)
