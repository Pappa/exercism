module Allergies (Allergen(..), allergies, isAllergicTo) where

import Data.Bits (testBit)

data Allergen = Eggs
              | Peanuts
              | Shellfish
              | Strawberries
              | Tomatoes
              | Chocolate
              | Pollen
              | Cats
              deriving (Enum, Eq)

allergens = [Eggs .. Cats]

allergies :: Int -> [Allergen]
allergies n = filter (testBit n . fromEnum) allergens

isAllergicTo :: Allergen -> Int -> Bool
isAllergicTo a n = testBit n $ fromEnum a
