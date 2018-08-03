module PhoneNumber

open System

let isValidLength (input: string): bool = 
    if input.Length = 10 then true else false

let isValidAreaCode (input: string): bool = 
    match input.[input.Length-10] with
    | '0' | '1' -> false
    | _ -> true

let isValidExchangeCode (input: string): bool = 
    match input.[input.Length-7] with
    | '0' | '1' -> false
    | _ -> true

let stripValidCountryCode (input: string): string = 
    if input.Length = 11 && input.[0] = '1' 
    then input.[1..] 
    else input

let clean (input: string): string option =  
    let cleaned =
        String.filter Char.IsNumber input
        |> stripValidCountryCode
    
    if isValidLength cleaned &&
        isValidAreaCode cleaned &&
        isValidExchangeCode cleaned
    then Some cleaned
    else None