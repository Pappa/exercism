module BST
    ( BST
    , bstLeft
    , bstRight
    , bstValue
    , empty
    , fromList
    , insert
    , singleton
    , toList
    ) where

data BST a = Empty
             | Node a (BST a) (BST a)
             deriving (Eq, Show) 

bstLeft :: BST a -> Maybe (BST a)
bstLeft Empty = Nothing
bstLeft (Node _ Empty _) = Nothing
bstLeft (Node _ l _) = Just l

bstRight :: BST a -> Maybe (BST a)
bstRight Empty = Nothing
bstRight (Node _ Empty _) = Nothing
bstRight (Node _ _ r) = Just r

bstValue :: BST a -> Maybe a
bstValue Empty = Nothing
bstValue (Node v _ _) = Just v

empty :: BST a
empty = Empty

fromList :: Ord a => [a] -> BST a
fromList xs = Node a (fromList l) (fromList r)
    where
        (l, a:r) = splitAt (length xs `div` 2) xs

insert :: Ord a => a -> BST a -> BST a
insert x Empty = singleton x
insert x tree@(Node a l r)
    | x > a     = Node a l (insert x r)
    | x < a     = Node a (insert x l) r
    | otherwise = tree

singleton :: a -> BST a
singleton x = (Node x Empty Empty)

toList :: BST a -> [a]
toList Empty = []
toList (Node a l r) = toList l ++ [a] ++ toList r
