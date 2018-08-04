module Grains

let square (n: int): Result<uint64,string> = 
    match n with
    | n when n > 0 && n < 65 -> 
        pown 2I (n - 1) |> uint64 |> Ok
    | _ -> Error "Invalid input"

let total: Result<uint64,string> = 
    (pown 2I 64) - 1I
    |> uint64
    |> Ok