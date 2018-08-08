module BinarySearch

let rec find' (input: int[]) (value: int) (first: int) (last: int): int option = 
    if last < first 
    then None
    else
        let target = first + (last - first) / 2
        match input.[target] with
        | x when x = value -> Some target
        | x when x < value -> find' input value (target + 1) last
        | _ -> find' input value first (target - 1)


let find (input: int[]) (value: int): int option = 
    find' input value 0 (input.Length - 1)