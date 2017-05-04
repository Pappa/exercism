module Queens (boardString, canAttack) where

import Data.List(intersperse)

type Queen = (Int, Int)

board = replicate 8 $ replicate 8 '_'

boardString :: Maybe Queen -> Maybe Queen -> String
boardString w b = format $ place w 'W' $ place b 'B' board

format :: [String] -> String
format board = unlines $ map (intersperse ' ') board

place :: Maybe Queen -> Char -> [String] -> [String]
place Nothing _ board = board
place (Just (r, c)) q board = newBoard
    where
        (rb, (row:ra)) = splitAt r board
        (cb, (col:ca)) = splitAt c row
        newRow = cb ++ [q] ++ ca
        newBoard = rb ++ [newRow] ++ ra


canAttack :: Queen -> Queen -> Bool
canAttack (ar, ac) (br, bc)
    | ar == br || ac == bc = True
    | abs (ar - br) == abs (ac - bc) = True
    | otherwise = False
