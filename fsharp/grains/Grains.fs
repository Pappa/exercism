module Grains

open System.Numerics

let square (n: int): Result<uint64,string> = 
    match n with
    | n when n > 0 && n < 65 -> 
        let value = pown 2 (n - 1)
        uint64(value) |> Ok
    | _ -> Error "Invalid input"

// let total: Result<uint64,string> = 
//     square 64
//     |> (-) 1

let total: Result<uint64,string> = failwith "You need to implement this function."