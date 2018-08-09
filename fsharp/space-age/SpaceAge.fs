module SpaceAge

type Planet = Earth | Venus | Mars | Jupiter | Saturn | Uranus | Neptune | Mercury

let private earthYearInSeconds = 31557600.0

let orbitalPeriodRatio (planet: Planet): float =
    match planet with
    | Mercury -> 0.2408467
    | Venus -> 0.61519726
    | Earth -> 1.0
    | Mars -> 1.8808158
    | Jupiter -> 11.862615 
    | Saturn -> 29.447498 
    | Uranus -> 84.016846
    | Neptune -> 164.79132

let age (planet: Planet) (seconds: int64): float = 
    let ratio = orbitalPeriodRatio planet
    (float seconds) / (earthYearInSeconds * ratio)