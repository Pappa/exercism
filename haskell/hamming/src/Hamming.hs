module Hamming (distance) where

distance :: String -> String -> Maybe Integer
distance strand1 strand2
    | length strand1 /= length strand2 = Nothing
    | strand1 == strand2 = Just 0
    | otherwise = Just (calculateDifferences strand1 strand2 0)

calculateDifferences :: String -> String -> Integer -> Integer
calculateDifferences [] [] count = count
calculateDifferences (s1:ss1) (s2:ss2) count
    | s1 /= s2 = calculateDifferences ss1 ss2 (count+1)
    | otherwise = calculateDifferences ss1 ss2 count
