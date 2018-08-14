module GradeSchool

open System

type School = Map<int, string list>

let grade (n: int) (school: School): string list = 
    let students = school.TryFind(n)
    match students with
    | Some x -> x
    | None -> []

let empty: School = Map.empty

let add (student: string) (n: int) (school: School): School = 
    let students = grade n school
    school |> Map.add n (List.sort (student :: students))

let roster (school: School): (int * string list) list = 
    school |> Map.toSeq |> Seq.toList
