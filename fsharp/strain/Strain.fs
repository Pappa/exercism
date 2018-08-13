module Seq

let keep predicate xs = 
    [for x in xs do if predicate x then yield x] |> Seq.ofList

let discard predicate xs = 
    keep (predicate >> not) xs