{-# LANGUAGE BangPatterns #-}
module ListOps
  ( length
  , reverse
  , map
  , filter
  , foldr
  , foldl'
  , (++)
  , concat
  ) where

import Prelude hiding
  ( length, reverse, map, filter, foldr, (++), concat )

foldl' :: (b -> a -> b) -> b -> [a] -> b
foldl' f !input ![] = input
foldl' f !input !(x:xs) = foldl' f (f input x) xs

foldr :: (a -> b -> b) -> b -> [a] -> b
foldr f input [] = input
foldr f input (x:xs) = f x $ foldr f input xs

length :: [a] -> Int
length [] = 0
length xs = sum $ map (\_ -> 1 :: Int) xs

reverse :: [a] -> [a]
reverse [] = []
reverse xs = last xs : reverse (init xs)

map :: (a -> b) -> [a] -> [b]
map _ [] = []
map f (x:xs) = f x : map f xs

filter :: (a -> Bool) -> [a] -> [a]
filter _ [] = []
filter p (x:xs)
    | p x = x : filter p xs
    | otherwise = filter p xs

(++) :: [a] -> [a] -> [a]
[] ++ ys = ys
(x:xs) ++ ys = x : xs ++ ys

concat :: [[a]] -> [a]
concat [] = []
concat l = foldr (++) [] l