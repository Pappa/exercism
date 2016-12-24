module Accumulate (accumulate) where

accumulate :: (a -> b) -> [a] -> [b]
accumulate f a = fmap f a
