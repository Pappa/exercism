module Accumulate (accumulate) where

accumulate :: (a -> b) -> [a] -> [b]
accumulate _ [] = []
accumulate f l = foldr a [] l
    where a x xs = f x : xs
