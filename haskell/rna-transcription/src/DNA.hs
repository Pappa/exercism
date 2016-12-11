module DNA (toRNA) where

toRNA :: String -> Maybe String
toRNA str
    | length invalid == 0 && length filtered > 0 = Just (map mapNucleotide filtered)
    | otherwise = Nothing
    where filtered = filter (`elem` "GCTA") str
          invalid = filter (not . (`elem` "GCTA")) str

mapNucleotide :: Char -> Char
mapNucleotide x
    | x == 'G' = 'C'
    | x == 'C' = 'G'
    | x == 'T' = 'A'
    | x == 'A' = 'U'