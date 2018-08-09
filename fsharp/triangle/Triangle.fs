module Triangle

open System

let isValid (triangle: float list): bool = 
    match List.sort triangle with
    | [a; b; c] ->
        a + b >= c && List.forall (fun side -> side > 0.0) triangle
    | _ -> false

let uniqueSides = Seq.distinct >> Seq.length

let equilateral (triangle: float list): bool = 
    isValid triangle && uniqueSides triangle |> (=) 1

let isosceles (triangle: float list): bool =
    isValid triangle && uniqueSides triangle |> (>=) 2

let scalene (triangle: float list): bool =
    isValid triangle && uniqueSides triangle |> (=) 3