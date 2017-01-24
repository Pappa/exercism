module Matrix (saddlePoints) where

import Data.Array (Array, listArray)
import Data.List (transpose, findIndices, group, sort)
import Data.List.Split (chunksOf)

saddlePoints :: Array (Int, Int) Int -> [(Int, Int)]
saddlePoints xs = map ((flip divMod) (length ch)) $ p--[(0,0)]
    where
    	ch = chunked xs
    	p = points $ ch

{-calculatePositions :: [[Int]] -> Int -> [(Int, Int)] -> [(Int, Int)]
calculatePositions [] i output = output
calculatePositions xss@(x:xs) i output = calculatePositions xs i (output ++ positions)
    where
        l = length xs
        indices = zip (maxInRows x) (minInCols x)
        positions = map (\(c, r) -> ((map addOffset c), (map addOffset r))) indices
        addOffset it = it + l * 3
-}

chunked xs = chunksOf (round $ sqrt $ realToFrac $ length ar) ar
    where
    	ar = foldr (:) [] $ xs

points xs = u 
    where
        u = map head $ filter ((>1) .length) $ group $ sort positions
        positions = concat $ map (\p -> (fst p ++ snd p)) $ calculatePositions ix ((length $ head xs) - 1) 0 []
        ix = indices xs

calculatePositions :: [([Int], [Int])] -> Int -> Int -> [([Int], [Int])] -> [([Int], [Int])]
calculatePositions [] lx i output = output
calculatePositions xss@(x:xs) lx i output = calculatePositions xs lx (i + 1) (output ++ positions)
    where
        positions :: [([Int], [Int])]
        positions = [(l, r)]
        l = map (\n -> n + lx * i) $ fst x
        r = map (\n -> n + (lx * n)) $ snd x

indices :: [[Int]] -> [([Int], [Int])]
indices xs = zip (maxInRows xs) (minInCols xs)

maxInRows xs = map (indicesOf maximum) xs
minInCols xs = map (indicesOf minimum) $ transpose xs

indicesOf f xs = findIndices (==x) xs
    where x = f xs