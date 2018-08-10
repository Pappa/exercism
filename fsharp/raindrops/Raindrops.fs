module Raindrops

let raindrops = [(3, "Pling"); (5, "Plang"); (7, "Plong")]

let getRaindrops (number: int) (acc: string) (factor: int, str: string): string = 
    if number % factor = 0 then acc + str else acc

let convert (number: int): string = 
    raindrops 
    |> List.fold (getRaindrops number) ""
    |> fun str -> 
        match str.Length with
        | 0 -> string number 
        | _ -> str