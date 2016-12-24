module Phone (areaCode, number, prettyPrint) where

import Data.Maybe (isJust, fromJust)

areaCode :: String -> Maybe String
areaCode phoneNumber
    | isJust phone = Just (take 3 $ fromJust phone)
    | otherwise = Nothing 
    where phone = number phoneNumber

number :: String -> Maybe String
number phoneNumber
    | length phone < 10 = Nothing
    | length phone == 10 = Just phone
    | length phone == 11 && (head phone) == '1' = Just (tail phone)
    | length phone > 10 = Nothing
    where phone = validNumbers phoneNumber

prettyPrint :: String -> Maybe String
prettyPrint phoneNumber
    | isJust phone = Just $ "(" ++ (take 3 $ fromJust phone) ++ ") " ++ (take 3 $ drop 3 $ fromJust phone) ++ "-" ++ (drop 6 $ fromJust phone)
    | otherwise = Nothing 
    where phone = number phoneNumber

validNumbers :: String -> String
validNumbers = filter(`elem` "0123456789")