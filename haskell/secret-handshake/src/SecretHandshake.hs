{-# LANGUAGE TypeSynonymInstances #-}
{-# LANGUAGE FlexibleInstances #-}

module SecretHandshake (handshake) where

import Data.Map (Map, fromList, (!))

class SecretHandshake a where
    handshake :: a -> [String]

instance SecretHandshake String where
    handshake [] = []
    handshake input = output
        where digits = zip [4,3..1] (reverse input)
              strings = filter (/= "") $ fmap getString digits
              output = if length input == 5 then (reverse strings) else strings

instance SecretHandshake Int where
    handshake i = handshake $ toBinaryString i

toBinaryString :: Int -> String
toBinaryString num = concat $ reverse $ map (show) $ bin num
    where bin 0 = []
          bin n = (n `mod` 2) : bin (n `div` 2)

getString :: (Int, Char) -> String
getString (n, s) = if s == '1' then handshakeMap ! n else ""

handshakeMap :: Map Int String
handshakeMap = fromList [(4, "wink"),(3, "double blink"),(2, "close your eyes"),(1, "jump")]