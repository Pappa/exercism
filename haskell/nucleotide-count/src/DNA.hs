module DNA (count, nucleotideCounts) where

import Data.Map
import Data.List

count :: Char -> String -> Either String Int
count = undefined

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts str = Data.Map.fromList $ Prelude.map createTuple $ group $ sort str

createTuple :: (Char, Int)
createTuple l = (head l, length l)