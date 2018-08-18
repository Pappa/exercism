module Hamming

let countIfDifferent (a, b): int = 
    if a <> b then 1 else 0

let distance (s1: string) (s2: string): int option = 
    if s1.Length <> s2.Length then None else
        Seq.zip s1 s2
        |> Seq.sumBy countIfDifferent
        |> Some

// let different (a, b) = 
//     if a <> b then Some (a, b) else None

// let distance (s1: string) (s2: string): int option = 
//     if s1.Length <> s2.Length then None else
//         Seq.zip s1 s2
//         |> Seq.map different
//         |> Seq.choose id
//         |> Seq.length
//         |> Some