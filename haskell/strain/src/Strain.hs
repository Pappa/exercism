module Strain (keep, discard) where

--import Data.List (filter)

discard :: (a -> Bool) -> [a] -> [a]
discard f l = filter (not . f) l

keep :: (a -> Bool) -> [a] -> [a]
keep = filter
