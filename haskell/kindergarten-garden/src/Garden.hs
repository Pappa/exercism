module Garden
    ( Plant (..)
    , defaultGarden
    , garden
    , lookupPlants
    ) where

import Data.Map (Map, fromList, (!))
import Data.List.Split (chunksOf)
import Data.List (sort)

data Plant = Clover
           | Grass
           | Radishes
           | Violets
           deriving (Eq, Show)

type Garden = Map String [Plant]
type Student = String

defaultStudents = ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"]

defaultGarden :: String -> Garden
defaultGarden = garden defaultStudents

garden :: [Student] -> String -> Garden
garden students plantList = fromList $ zip (sort students) plants
  where [row1, row2] = map (map (plantMap !)) $ lines plantList
        plants = zipWith (++) (chunksOf 2 row1) (chunksOf 2 row2)
        plantMap = fromList [('C', Clover), ('G', Grass), ('R', Radishes), ('V', Violets)]

lookupPlants :: Student -> Garden -> [Plant]
lookupPlants = flip (!)