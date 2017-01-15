module Triangle (rows) where

rows :: Int -> [[Integer]]
rows n 
    | n <= 0 = []
    | otherwise = reverse $ foldr (.) id (replicate (n-1) rows') [[1]]
    where rows' l@(x:xs) = (zipWith (+) (0:x) (x++[0])):l