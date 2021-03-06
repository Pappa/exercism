﻿module BeerSong

open System

let upper (str: string): string =
    match str |> List.ofSeq with
    | x :: xs -> (Char.ToUpper(x) :: xs) |> List.toArray |> String
    | _ -> str

let bottlesOfBeer (n: int): string = 
    match n with
    | 0 -> "no more bottles of beer"
    | 1 -> "1 bottle of beer"
    | _ -> sprintf "%i bottles of beer" n

let primary (n: int): string = 
    let str = bottlesOfBeer n
    sprintf "%s on the wall, %s." (upper str) str

let secondary (n: int): string =
    match n with
    | 0 -> "Go to the store and buy some more, 99 bottles of beer on the wall."
    | _ ->  
        let str = bottlesOfBeer (n - 1)
        let num = if n > 1 then "one" else "it"
        sprintf "Take %s down and pass it around, %s on the wall." num str

let couplet(start: int) (take: int) (n: int) : string list =
    let lines = [primary n; secondary n]
    if n + take - 1 = start then lines else lines @ [""]

let recite (start: int) (take: int): string list = 
    let range = [start .. -1 .. start - take + 1]
    range |> List.map (couplet start take) |> Seq.concat |> List.ofSeq
