module Hamming (distance) where

distance :: String -> String -> Maybe Integer
distance s1 s2
    | length s1 /= length s2 = Nothing
    | s1 == s2 = Just 0
    | otherwise = Just dist 
    where dist = fromIntegral $ length $ filter (\(a, b) -> a /= b) (zip s1 s2)