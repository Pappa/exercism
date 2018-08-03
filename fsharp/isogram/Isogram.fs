module Isogram

open System

let isIsogram (str: string): bool = 
    let letters = 
        str.ToUpper()
        |> String.filter Char.IsLetter

    Seq.distinct letters
    |> Seq.length
    |> (=) letters.Length