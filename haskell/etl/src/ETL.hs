module ETL (transform) where

import Data.Map (Map)
import qualified Data.Map as M
import Data.Char (toLower)

transform :: Map Int String -> Map Char Int
transform input = M.fromList $ fmap transformItem $ M.toList input

transformItem :: (Int, String) -> (Char, Int)
transformItem (i, s:[]) = (toLower s, i)
transformItem (i, s:ss) = (toLower s, i)