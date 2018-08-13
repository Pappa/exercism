module Accumulate

let rec private accumulator<'a, 'b> (func: 'a -> 'b) (input: 'a list) (acc: 'b list): 'b list = 
    match input with
    | x::xs -> accumulator func xs (func x :: acc)
    | [] -> acc

let accumulate<'a, 'b> (func: 'a -> 'b) (input: 'a list): 'b list = 
    accumulator func input [] |> List.rev