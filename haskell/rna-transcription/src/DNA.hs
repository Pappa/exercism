module DNA (toRNA) where

toRNA :: String -> Maybe String
toRNA str
    | length str > 0 = Just (map mapNucleotide str)
    | otherwise = Nothing

mapNucleotide :: Char -> Char
mapNucleotide x
    | x == 'G' = 'C'
    | x == 'C' = 'G'
    | x == 'T' = 'A'
    | x == 'A' = 'U'
    | otherwise = x