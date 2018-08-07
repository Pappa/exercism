module SumOfMultiples

open System

let multiples (max: int) (n: int) : int list = 
    [ for i in n .. n .. (max - 1) -> i ]

let sum (numbers: int list) (max: int): int = 
    numbers
    |> List.collect (multiples max)
    |> Seq.distinct
    |> Seq.sum 