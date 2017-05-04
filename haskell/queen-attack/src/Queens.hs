module Queens (boardString, canAttack) where

import Data.List(intersperse)

board = replicate 8 $ replicate 8 '_'

boardString :: Maybe (Int, Int) -> Maybe (Int, Int) -> String
boardString Nothing Nothing = format board
boardString (Just w) Nothing = format $ place w 'W' board
boardString Nothing (Just b) = format $ place b 'B' board
boardString (Just w) (Just b) = format $ place w 'W' $ place b 'B' board

format :: [String] -> String
format board = unlines $ map (intersperse ' ') board

place :: (Int, Int) -> Char -> [String] -> [String]
place (r, c) q board = newBoard
    where
        (rb, (row:ra)) = splitAt r board
        (cb, (col:ca)) = splitAt c row
        newRow = cb ++ [q] ++ ca
        newBoard = rb ++ [newRow] ++ ra


canAttack :: (Int, Int) -> (Int, Int) -> Bool
canAttack (ar, ac) (br, bc)
    | ar == br || ac == bc = True
    | abs (ar - br) == abs (ac - bc) = True
    | otherwise = False
