module Raindrops

let raindrops = [(3, "Pling"); (5, "Plang"); (7, "Plong")]

let convert (number: int): string = 
    raindrops 
    |> List.fold (fun acc (factor, str) -> if number % factor = 0 then acc + str else acc) ""
    |> (fun str -> if str.Length > 0 then str else string number) 