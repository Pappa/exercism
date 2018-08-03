module RobotName

open System

type Robot = { name: string }

let private getRandomString (ch: char list) (r: Random) (n: int): string = 
    [1..n]
    |> List.map (fun _ -> ch.Item(r.Next(ch.Length)))
    |> List.toArray
    |> String

let private generateName(): string = 
    let letters = ['A'..'Z']
    let numbers = ['0'..'9']
    let rand = Random()
    getRandomString letters rand 2 + 
    getRandomString numbers rand 3

let mkRobot(): Robot = { name = generateName() }

let name (robot: Robot): string = robot.name

let reset (robot: Robot): Robot = mkRobot()