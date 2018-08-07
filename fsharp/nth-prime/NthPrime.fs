module NthPrime

let LOW_PRIMES = [2; 3; 5; 7; 11; 13]

let isPrime n =
    match n with
    | _ when List.contains n LOW_PRIMES -> true
    | _ -> 
        [2 .. (float >> sqrt >> int) n]
        |> List.forall (fun x -> n % x <> 0)

let rec primes n =
    seq {
        if isPrime n
        then yield n
        yield! primes (n + 1)
    }

let prime (nth: int): int option = 
    match nth with
    | _ when nth < 1 -> None
    | _ when nth <= LOW_PRIMES.Length -> Some LOW_PRIMES.[nth - 1]
    | _ -> 
        primes 2
        |> Seq.take nth
        |> Seq.rev
        |> Seq.head
        |> Some