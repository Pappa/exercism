module BinarySearchTree

open System

type BST<'a> =
    | Leaf
    | Node of BST<'a> * 'a * BST<'a>

let private singleton (value: 'a): BST<'a> = 
    Node (Leaf, value, Leaf)

let left node = 
    match node with
    | Node (Leaf, _, _) -> None
    | Node (x, _, _) -> Some x
    | _ -> failwith "Oops"

let right node = 
    match node with
    | Node (_, _, Leaf) -> None
    | Node (_, _, x) -> Some x
    | _ -> failwith "Oops"

let data node = 
    match node with
    | Node (_, x, _) -> x
    | _ -> failwith "Oops"

let rec insert (tree: BST<'a>) (value: 'a): BST<'a> =
    match tree with
    | Node (l, v, r) when value <= v -> Node (insert l value, v, r)
    | Node (l, v, r) when value > v -> Node (l, v, insert r value)
    | Leaf -> singleton value
    | Node _ as node -> node


let create (items: 'a list): BST<'a> =
    match items with
    | [] -> failwith "No items"
    | x::[] -> singleton x
    | x::xs -> List.fold insert (singleton x) xs

let rec sortedData node = 
    match node with
    | Leaf -> []
    | Node(l, v, r) -> (sortedData l) @ [v] @ (sortedData r)