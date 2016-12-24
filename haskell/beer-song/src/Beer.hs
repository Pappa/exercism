module Beer (song) where

song :: String
song = concatMap makeLyrics [99, 98..1]

makeLyrics :: Int -> String
makeLyrics x
    | x > 1 = show x ++ " bottles of beer on the wall, " ++ show x ++ " bottles of beer.\n\
       \Take one down and pass it around, " ++ show (x-1) ++ " bottle" ++ s ++ " of beer on the wall.\n\
       \\n\
       \"
    | otherwise = "1 bottle of beer on the wall, 1 bottle of beer.\n\
       \Take it down and pass it around, no more bottles of beer on the wall.\n\
       \\n\
       \No more bottles of beer on the wall, no more bottles of beer.\n\
       \Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    where s = if x == 2 then "" else "s"