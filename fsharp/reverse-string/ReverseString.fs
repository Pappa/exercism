module ReverseString

open System

let reverse (input: string): string = 
    Seq.toArray input
    |> Array.rev
    |> String