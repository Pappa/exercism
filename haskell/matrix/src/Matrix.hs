module Matrix
    ( Matrix
    , cols
    , column
    , flatten
    , fromList
    , fromString
    , reshape
    , row
    , rows
    , shape
    , transpose
    ) where

import Data.Vector (Vector)
import qualified Data.Vector as V
import qualified Data.List as L (transpose, dropWhileEnd, dropWhile)
import qualified Data.List.Split as S (splitOn, divvy)
import Data.Char (isSpace)

data Matrix a = Matrix [[a]]
                deriving (Eq, Show, Read)

cols :: Matrix a -> Int
cols (Matrix []) = 0
cols (Matrix (x:xs)) = length x

column :: Int -> Matrix a -> Vector a
column i m = row i $ transpose m

flatten :: Matrix a -> Vector a
flatten (Matrix xs) = V.fromList $ concat xs

fromList :: [[a]] -> Matrix a
fromList = Matrix

fromString :: Read a => String -> Matrix a
fromString s@('"':xs) = Matrix . fmap (fmap (read . show . trimChar '"') . (S.splitOn " \"")) $ fmap (trimChar ' ') $ lines s
    where
        trimChar c = L.dropWhileEnd (==c) . L.dropWhile (==c)
fromString s = Matrix . fmap (fmap read . words) $ lines s

readShow :: Show a => a -> String
readShow s = read $ show s :: String

fromString' :: String -> String
fromString' s@(x:xs) = trimmed
    where
        trimmed = L.dropWhileEnd isSpace $ L.dropWhile isSpace s

reshape :: (Int, Int) -> Matrix a -> Matrix a
reshape (c, r) (Matrix xs) = Matrix $ S.divvy c r $ concat xs
    where
        w = length $ head xs
        h = length xs

row :: Int -> Matrix a -> Vector a
row _ (Matrix []) = V.fromList []
row i (Matrix (x:xs))
    | i == 0 = V.fromList x
    | otherwise = row (i - 1) (Matrix xs)

rows :: Matrix a -> Int
rows (Matrix xs) = length xs

shape :: Matrix a -> (Int, Int)
shape m = (rows m, cols m)

transpose :: Matrix a -> Matrix a
transpose (Matrix xs) = Matrix $ L.transpose xs
