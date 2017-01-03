module LinkedList
    ( LinkedList
    , datum
    , fromList
    , isNil
    , new
    , next
    , nil
    , reverseLinkedList
    , toList
    ) where

data LinkedList a = Nil | Node { datum :: a, next :: LinkedList a }

--datum :: LinkedList a -> a
--datum = undefined

fromList :: [a] -> LinkedList a
fromList = foldr new nil

isNil :: LinkedList a -> Bool
isNil Nil = True
isNil _ = False

new :: a -> LinkedList a -> LinkedList a
new = Node

--next :: LinkedList a -> LinkedList a
--next = undefined

nil :: LinkedList a
nil = Nil

reverseLinkedList :: LinkedList a -> LinkedList a
reverseLinkedList = process nil
    where process a Nil = a
          process a (Node x xs) = process (new x a) xs

toList :: LinkedList a -> [a]
toList Nil = []
toList (Node x xs) = x : toList xs
