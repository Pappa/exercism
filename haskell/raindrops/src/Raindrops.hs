module Raindrops (convert) where

convert :: Int -> String
convert input
    | length raindropsString > 0 = raindropsString
    | otherwise = show input
    where raindropsString = concat $ fmap (getString input) raindrops

getString :: Int -> (Int, String) -> String
getString i (n, s) = if (i `mod` n == 0) then s else ""

raindrops :: [(Int, String)]
raindrops = [(3, "Pling"),(5, "Plang"),(7, "Plong")]