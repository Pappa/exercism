module Raindrops

open System

let raindrops = [(3, "Pling"); (5, "Plang"); (7, "Plong")]

let getRaindrop (number: int) (factor, str) =
    if (number % factor = 0)
    then str
    else "" 

let convert (number: int): string = 
    let str = List.map (getRaindrop number) raindrops |> String.concat ""
    match str with
    | x when x.Length > 0 -> x
    | _ -> string number