module AllYourBase

let isValid (digits: int list) (inputBase: int) (outputBase: int): bool =
    inputBase > 1 
    && outputBase > 1
    && List.forall (fun d -> d > -1 && d < inputBase) digits

let toBase10 (digits: int list) (inputBase: int): int =
    Seq.rev digits 
    |> Seq.mapi (fun i x -> pown inputBase i |> (*) x) 
    |> Seq.sum

let rec rebase' (x: int) (targetBase: int): int seq = 
    seq { 
        yield x % targetBase
        let quotient = x / targetBase
        if quotient > 0
        then yield! rebase' quotient targetBase
    }
        

let rebase (digits: int list) (inputBase: int) (outputBase: int): int list option = 
    match digits with
    | _ when not <| isValid digits inputBase outputBase -> None
    | _ when digits = [0] || digits = [1] -> Some digits
    | [] -> Some [0]
    | _ ->
        let n = toBase10 digits inputBase
        rebase' n outputBase |> Seq.rev |> Seq.toList |> Some