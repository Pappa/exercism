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
empty = error "You need to implement this function."

fromList :: Ord a => [a] -> BST a
fromList xs = Node a (fromList l) (fromList r)
    where
        (l, a:r) = splitAt (length xs `div` 2) xs

insert :: Ord a => a -> BST a -> BST a
insert x tree = error "You need to implement this function."

singleton :: a -> BST a
singleton x = (Node x Empty Empty)

toList :: BST a -> [a]
toList Empty = []
toList (Node a l r) = toList l ++ [a] ++ toList r
