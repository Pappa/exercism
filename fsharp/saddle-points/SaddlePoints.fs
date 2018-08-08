module SaddlePoints

open System

let rec transpose list =
    match list with 
    | [] -> []
    | []::_ -> [] 
    | xs -> List.map List.head xs :: transpose (List.map List.tail xs)

let saddlePoints (matrix: int list list): (int * int) list = 
    match matrix with
    | [[]] -> []
    | _ ->
        let transposed = transpose matrix
        [ for y in [0 .. matrix.[0].Length - 1] do
          for x in [0 .. matrix.Length - 1] do
            let v = matrix.[x].[y]
            if (v = List.max matrix.[x] && v = List.min transposed.[y]) then yield (x,y)]
