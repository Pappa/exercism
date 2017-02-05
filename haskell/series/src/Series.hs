module Series (slices) where

slices :: Int -> String -> [[Int]]
slices 0 _ = [[]]
slices n xs
    | isInvalid xs = []
    | otherwise = slices' n ints []
    where
        ints = map (read . (:"")) xs :: [Int]

slices' n [] result = result
slices' n ints@(x:xs) result
    | length ints > n = slices' n xs (result ++ [take n ints])
    | otherwise = result ++ [ints]

isInvalid xs = not $ all (`elem` ['0'..'9']) xs