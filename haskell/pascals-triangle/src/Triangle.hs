module Triangle (rows) where

rows :: Int -> [[Integer]]
rows n
    | n < 1 = []
    | otherwise = addRow n [[1]]

addRow :: Int -> [[Integer]] -> [[Integer]]
addRow n ls@(x:xs)
    | length ls == n = reverse ls
    | otherwise = (addRow n ((createRow (expandRow x) []) : ls))

expandRow :: [Integer] -> [Integer]
expandRow x = 0 : x ++ [0]

createRow :: [Integer] -> [Integer] -> [Integer]
createRow (x1:[]) output = output
createRow (x1:x2:xs) output = createRow (x2:xs) ((x1 + x2):output)
