module School (add, empty, grade, sorted) where

type Grade = Int
type Student = String
type GradeBook = [(Grade, [Student])]

add :: Grade -> Student -> GradeBook -> GradeBook
add grade name gradeBook = []

empty :: GradeBook
empty = []

grade :: Grade -> GradeBook -> [Student]
grade g gradeBook = []

sorted :: GradeBook -> GradeBook
sorted gradeBook = []
