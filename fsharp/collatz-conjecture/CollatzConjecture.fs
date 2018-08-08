module CollatzConjecture



let rec collatz (n: int) = seq {
    match n with
    | 1 -> do ()
    | x when x % 2 = 0 -> 
        yield x
        yield! collatz (x / 2)
    | _ -> 
        yield n
        yield! collatz (n * 3 + 1)
}

let steps (number: int): int option = 
    match number with
    | x when x < 1 -> None
    | _ -> collatz number |> Seq.length |> Some
