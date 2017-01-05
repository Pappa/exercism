module Roman (numerals) where

numerals :: Int -> Maybe String
numerals n
    | n < 1 || n > 3000 = Nothing
    | otherwise = Just $ numerals' n ""


numerals' :: Int -> String -> String
numerals' n s
    | n == 4 = s ++ "IV"
    | n == 9 = s ++ "IX"
    | n `elem` [40..49] = numerals' (n - 40) (s ++ "XL")
    | n `elem` [90..99] = numerals' (n - 90) (s ++ "XC")
    | n `elem` [400..499] = numerals' (n - 400) (s ++ "CD")
    | n `elem` [900..999] = numerals' (n - 900) (s ++ "CM")
    | r > 0 = numerals' r (s ++ x)
    | otherwise = s ++ x
    where (x, r) = repeater n

repeater :: Int -> (String, Int)
repeater n = (x, r)
    where 
    	(q, r) = quotRem n i
    	x = replicate q c
    	(i, c)
    	    | n >= 1000 = (1000, 'M')
    	    | n >= 500 = (500, 'D')
    	    | n >= 100 = (100, 'C')
    	    | n >= 50 = (50, 'L')
    	    | n >= 10 = (10, 'X')
    	    | n >= 5 = (5, 'V')
    	    | otherwise = (1, 'I')
