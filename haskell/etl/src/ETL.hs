module ETL (transform) where

import Data.Map (Map)
import qualified Data.Map as M
import Data.Char (toLower)

transform :: Map Int String -> Map Char Int
transform input = M.fromList $ concatMap transformItem $ M.toList input

transformItem :: (Int, String) -> [(Char, Int)]
transformItem (i, ss) = fmap (\s -> (toLower s, i)) ss

