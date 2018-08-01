module Leap

let (|DivisibleBy|_|) x y = if y % x = 0 then Some() else None

let leapYear (year: int): bool = 
    match year with
    | DivisibleBy 400 year -> true
    | DivisibleBy 100 year -> false
    | DivisibleBy 4 year   -> true
    | _                    -> false