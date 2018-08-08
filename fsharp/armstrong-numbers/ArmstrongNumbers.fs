module ArmstrongNumbers

open System

let isArmstrongNumber (number: int): bool = 
    let (digits: int list) = number |> string |> Seq.toList |> List.map Char.GetNumericValue |> List.map int
    let pow = digits.Length

    List.sum [ for d in digits -> pown d pow ] |> (=) number