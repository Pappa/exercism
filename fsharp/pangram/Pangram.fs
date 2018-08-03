module Pangram

open System

let uniqueLetters (input: string): string =
    input.ToUpper()
    |> Seq.toArray
    |> Array.filter Char.IsLetter
    |> Array.distinct
    |> String

let isPangram (input: string): bool = 
    uniqueLetters(input).Length = 26