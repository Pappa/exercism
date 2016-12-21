module School (School, add, empty, grade, sorted) where

import qualified Data.List as L
import qualified Data.Map as M

type Grade = Int
type Student = String
type School = M.Map Grade [Student]

add :: Grade -> Student -> School -> School
add g name = M.insertWith (++) g [name]

empty :: School
empty = M.empty

grade :: Grade -> School -> [Student]
grade g = L.sort . M.findWithDefault [] g

sorted :: School -> [(Grade, [Student])]
sorted = M.toList . fmap L.sort
