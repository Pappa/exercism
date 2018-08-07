module Anagram

open System

let sort (input: string): string = input.ToLower() |> Seq.sort |> Array.ofSeq |> String

let isAnagram (s1: string) (s2: string): bool =
    s1.ToLower() <> s2.ToLower() &&
    (sort s1) = (sort s2)

let anagrams (sources: string list) (target: string): string list = 
    sources |> List.filter (isAnagram target)