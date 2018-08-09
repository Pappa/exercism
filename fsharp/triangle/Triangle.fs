module Triangle

open System

let isValid (triangle: float list): bool = 
    match List.sort triangle with
    | [a; b; c] ->
        a + b >= c && List.forall (fun side -> side > 0.0) triangle
    | _ -> false

let equilateral (triangle: float list): bool = 
    isValid triangle && Seq.distinct triangle |> Seq.length |> (=) 1

let isosceles (triangle: float list): bool =
    isValid triangle && Seq.distinct triangle |> Seq.length |> (>=) 2

let scalene (triangle: float list): bool =
    isValid triangle && Seq.distinct triangle |> Seq.length |> (=) 3