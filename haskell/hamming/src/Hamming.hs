module Hamming (distance) where
import Data.List (genericLength)

distance :: String -> String -> Maybe Integer
distance s1 s2
    | length s1 /= length s2 = Nothing
    | s1 == s2 = Just 0
    | otherwise = Just dist 
    where dist = genericLength $ filter different (zip s1 s2)

different :: (Char, Char) -> Bool
different (a, b) = a /= b