module Triangle (TriangleType(..), triangleType) where

data TriangleType = Equilateral
                  | Isosceles
                  | Scalene
                  | Illegal
                  deriving (Eq, Show)

triangleType a b c
    | isEquilateral a b c = Equilateral
    | otherwise = Illegal

isEquilateral :: Float -> Float -> Float -> Bool
isEquilateral a b c = a == b && a == c && a > 0