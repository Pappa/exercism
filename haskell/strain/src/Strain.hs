module Strain (keep, discard) where

discard :: (a -> Bool) -> [a] -> [a]
discard f l = filter (not . f) l

keep :: (a -> Bool) -> [a] -> [a]
keep = filter
