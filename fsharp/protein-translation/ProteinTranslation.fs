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

let proteins (rna: string): string list = 
    let length = 3
    [0 .. length .. rna.Length - length]
    |> List.map (fun i -> rna.[i .. i + length - 1])
    |> Seq.takeWhile (fun c -> not <| List.contains c STOP_CODONS) 
    |> List.ofSeq
    |> List.map getProtein