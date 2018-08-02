module DifferenceOfSquares

open System

let square (n: int): int = n * n

let squareOfSum (n: int): int = 
    square <| List.sum [1 .. n]

let sumOfSquares (n: int): int = 
    List.sumBy square [1 .. n]

let differenceOfSquares (n: int): int = 
    abs <| squareOfSum n - sumOfSquares n