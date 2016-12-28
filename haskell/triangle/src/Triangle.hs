module Triangle (TriangleType(..), triangleType) where

data TriangleType = Equilateral
                  | Isosceles
                  | Scalene
                  | Illegal
                  deriving (Eq, Show)

triangleType a b c
    | isIllegal a b c = Illegal
    | isEquilateral a b c = Equilateral
    | isIsosceles a b c = Isosceles
    | isScalene a b c = Scalene
    | otherwise = Illegal

isEquilateral :: Float -> Float -> Float -> Bool
isEquilateral a b c = a == b && a == c && a > 0

isIsosceles :: Float -> Float -> Float -> Bool
isIsosceles a b c
    | a == b && a /= c = True
    | a == c && a /=b = True
    | b == c && b /=a = True
    | otherwise = False

isScalene :: Float -> Float -> Float -> Bool
isScalene a b c
    | a /= b && a /=c && b /= c = True
    | otherwise = False

isIllegal :: Float -> Float -> Float -> Bool
isIllegal a b c
    | a + b < c = True
    | a + c < b = True
    | b + c < a = True
    | otherwise = False