module Series

let slices (str: string) (length: int): string list option = 
    if str.Length < 1 || length < 1 || length > str.Length
    then None
    else
        [0 .. str.Length - length]
        |> List.mapi (fun n i -> str.[i .. i + length - 1])
        |> Some