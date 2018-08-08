module ProteinTranslation

open System

let private STOP_CODONS = ["UAA"; "UAG"; "UGA"];
let private CODONS_BY_PROTEIN = 
    Map.ofList [
        ("Methionine", ["AUG"]);
        ("Phenylalanine", ["UUU"; "UUC"]);
        ("Leucine", ["UUA"; "UUG"]);
        ("Serine", ["UCU"; "UCC"; "UCA"; "UCG"]);
        ("Tyrosine", ["UAU"; "UAC"]);
        ("Cysteine", ["UGU"; "UGC"]);
        ("Tryptophan", ["UGG"]) ]

let getProtein (codon: string): string =
    Map.fold (fun state protein codons -> if List.contains codon codons then protein else state) "" CODONS_BY_PROTEIN

let slices (str: string) (length: int): string list = 
    if str.Length < 1 || length < 1 || length > str.Length
    then []
    else
        [0 .. length .. str.Length - length]
        |> List.map (fun i -> str.[i .. i + length - 1])

let proteins (rna: string): string list = 
    slices rna 3
    |> Seq.takeWhile (fun c -> not <| List.contains c STOP_CODONS) 
    |> List.ofSeq
    |> List.map getProtein