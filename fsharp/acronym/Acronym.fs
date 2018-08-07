module Acronym

open System

let abbreviate (phrase: string): string = 
    phrase.ToUpper().Split([|" "; "-"|], StringSplitOptions.None)
    |> Array.map (fun w -> w.[0])
    |> String