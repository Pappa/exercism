module RnaTranscription

open System

let NucleotideMap =
    [ 
        'G', "C";
        'C', "G";
        'T', "A";
        'A', "U"
    ]
    |> Map.ofList

let transcribe (c: char): string = 
    match c |> NucleotideMap.TryFind with
    | Some x -> x
    | None -> ""

let toRna (dna: string): string = 
    String.collect transcribe dna