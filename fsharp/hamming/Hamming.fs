module Hamming

let countIfDifferent ((a, b): char * char): int = 
    if a <> b then 1 else 0

let distance (s1: string) (s2: string): int option = 
    if s1.Length <> s2.Length then None else
        Seq.zip s1 s2
        |> Seq.map countIfDifferent
        |> Seq.sum
        |> Some