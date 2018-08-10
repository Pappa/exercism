﻿module BinarySearchTree

open System

type BST<'a> =
    | Leaf
    | Node of BST<'a> * 'a * BST<'a>

let private simgleton (value: 'a): BST<'a> = 
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

let create (items: 'a list): BST<'a> =
    simgleton items.[0]

let sortedData node = failwith "You need to implement this function."