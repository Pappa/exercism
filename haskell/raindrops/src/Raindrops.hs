module Raindrops (convert) where

convert :: Int -> String
convert input
    | length raindropsString == 0 = show input
    | otherwise = raindropsString
    where raindropsString = concat $ fmap (getString input) raindrops

getString :: Int -> (Int, String) -> String
getString i (n, s)
    | i `mod` n == 0 = s
    | otherwise = ""

raindrops :: [(Int, String)]
raindrops = [(3, "Pling"),(5, "Plang"),(7, "Plong")]