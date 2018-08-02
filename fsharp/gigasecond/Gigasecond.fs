module Gigasecond

open System

let GigaSecond = 1e9

let add (date: DateTime): DateTime = 
    date.AddSeconds(GigaSecond)