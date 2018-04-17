class BinarySearchTree {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data > this.data) {
            if (!this.right) {
                this.right = new BinarySearchTree(data);
            } else {
                this.right.insert(data);
            }
        } else {
            if (!this.left) {
                this.left = new BinarySearchTree(data);
            } else {
                this.left.insert(data);
            }
        }
    }

    each(fn) {
        if (this.left) {
            this.left.each(fn);
        }
        fn(this.data);
        if (this.right) {
            this.right.each(fn);
        }
    }
}



module.exports = BinarySearchTree;