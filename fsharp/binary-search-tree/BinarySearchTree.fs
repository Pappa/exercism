module BinarySearchTree

open System

type BST<'a> =
    | Leaf
    | Node of BST<'a> * 'a * BST<'a>

let private simgleton (value: 'a): BST<'a> = 
    Node (Leaf, value, Leaf)

let left node = function
    | Node (x, _, _) -> Some x
    | Leaf -> None

let right node = function
    | Node (_, _, x) -> Some x
    | Leaf -> None

let data node = function 
    | Node (_, x, _) -> x
    | _ -> failwith "Oops"

let create (items: 'a list): BST<'a> =
    simgleton items.[0]

let sortedData node = failwith "You need to implement this function."