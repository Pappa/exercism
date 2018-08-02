module Bob

open System

let charCollector (c: char): string = 
    if Char.IsLetter c
    then Char.ToString c
    else ""

let getLetters (statement: string): string = 
    String.collect charCollector statement

let (|Nothing|_|) (statement: string) = 
    if statement.Length = 0 
    then Some Nothing
    else None

let (|Shouting|_|) (statement: string) = 
    let letters = getLetters statement
    if letters.Length > 0 && letters.ToUpper() = letters
    then Some Shouting
    else None

let (|Question|_|) (statement: string) =
    if statement.EndsWith("?") 
    then Some Question
    else None

let response (input: string) = 
    match input.Trim() with
    | Nothing -> "Fine. Be that way!"
    | Shouting & Question -> "Calm down, I know what I'm doing!"
    | Shouting -> "Whoa, chill out!"
    | Question -> "Sure."
    | _ -> "Whatever."