module LargestSeriesProduct

open System

let product (n: string): int =
    n |> Seq.map Char.GetNumericValue |> Seq.map int |> Seq.fold (*) 1

let isValid (input: string) (span: int): bool = 
    Seq.forall Char.IsNumber input && span <= input.Length && span > 1

let largestProduct (input: string) (span: int) : int option = 
    match span with
    | _ when span = 0 -> Some 1
    | _ when not <| isValid input span -> None
    | _ ->
        [0 .. (input.Length - span)]
        |> List.map (fun idx -> input.[idx .. idx + span - 1])
        |> List.map product
        |> List.max
        |> Some