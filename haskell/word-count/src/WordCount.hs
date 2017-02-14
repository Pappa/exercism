module WordCount (wordCount) where

import Data.List (sort, group)
import Data.Char (toLower)

punctuation = "¡!&@$%^&:.?¿"
quotes = "'\""

wordCount :: String -> [(String, Int)]
wordCount xs = map (\x -> (head x, length x)) grouped
    where
        filtered = filter (`notElem` punctuation) $ map toLower xs
        cleaned = map (\x -> if x == ',' then ' ' else x) filtered
        unquoted = map unquote $ words $ cleaned
        grouped = group $ sort unquoted

unquote :: String -> String   
unquote str@(s:ss)
    | s `elem` quotes && (last ss) `elem` quotes = init ss
    | otherwise = str