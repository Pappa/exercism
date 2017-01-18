module Triplet (isPythagorean, mkTriplet, pythagoreanTriplets) where

import Data.Function (on)
import Data.List (sortBy)

isPythagorean (a, b, c)
    | a**2 + b**2 == c**2 = True
    | b**2 + c**2 == a**2 = True
    | a**2 + c**2 == b**2 = True
    | otherwise = False

mkTriplet a b c = (a, b, c)

pythagoreanTriplets x y = sortOnFirst $ [(a,b,c) | c <- [x..y], b <- [x..c], a <- [x..b], a^2 + b^2 == c^2]
    where
        f (x, _, _) = x
        sortOnFirst = sortBy (compare `on` f)
