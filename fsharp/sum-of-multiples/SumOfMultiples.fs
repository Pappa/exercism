module SumOfMultiples

open System

let multiples (max: int) (n: int) : int list = 
    [ for i in n .. n .. max -> i ]

let sum (numbers: int list) (upperBound: int): int = 
    numbers
    |> List.collect (multiples (upperBound - 1))
    |> Seq.distinct
    |> Seq.sum 