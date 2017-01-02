module Robot
    ( Bearing(East,North,South,West)
    , bearing
    , coordinates
    , mkRobot
    , simulate
    , turnLeft
    , turnRight
    ) where

data Bearing = North
             | East
             | South
             | West
             deriving (Enum, Eq, Show)

type Coords = (Integer, Integer)
type Robot = (Bearing, Coords)

bearing :: Robot -> Bearing
bearing = fst

coordinates :: Robot -> Coords
coordinates = snd

mkRobot :: Bearing -> Coords -> Robot
mkRobot bearing coords = (bearing, coords)

simulate :: Robot -> String -> Robot
simulate robot "" = robot
simulate robot (x:xs) = simulate (executeCommand robot x) xs

executeCommand :: Robot -> Char -> Robot
executeCommand robot c
    | c == 'L' = (turnLeft $ bearing robot, coordinates robot)
    | c == 'R' = (turnRight $ bearing robot, coordinates robot)
    | c == 'A' = (bearing robot, advance robot)
    | otherwise = robot

advance :: Robot -> Coords
advance robot = case (bearing robot) of
    North -> (x, succ y)
    East -> (succ x, y)
    South -> (x, pred y)
    West -> (pred x, y)
    where coords = coordinates robot
          x = fst coords
          y = snd coords

turnLeft :: Bearing -> Bearing
turnLeft North = West
turnLeft b = pred b

turnRight :: Bearing -> Bearing
turnRight West = North
turnRight b = succ b
