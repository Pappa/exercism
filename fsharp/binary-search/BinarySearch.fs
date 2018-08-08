module BinarySearch

let rec binaryFind (input: int[]) (value: int) (first: int) (last: int): int option = 
    if last < first 
    then None
    else
        let target = first + (last - first) / 2
        match input.[target] with
        | x when x = value -> Some target
        | x when x < value -> binaryFind input value (target + 1) last
        | _ -> binaryFind input value first (target - 1)


let find (input: int[]) (value: int): int option = 
    binaryFind input value 0 (input.Length - 1)