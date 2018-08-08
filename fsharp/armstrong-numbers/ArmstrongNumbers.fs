module ArmstrongNumbers

open System

let toDigits (number: int): int list = 
    number |> string |> Seq.toList |> List.map Char.GetNumericValue |> List.map int

let isArmstrongNumber (number: int): bool = 
    let digits = toDigits number
    let pow = digits.Length

    List.sum [ for d in digits -> pown d pow ]
    |> (=) number