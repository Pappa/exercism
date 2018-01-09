class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {

    constructor() {
        this._count = 0;
        this._head = null;
        this._end = null;
        this._current = null;
    }

    push(data) {
        let node = new Node(data);
        this._current = this._head;
        if (!this._current) {
            this._head = node;
            this._end = this._head;
            this._count++;
            return;
        }
        while (this._current.next) {
            this._current = this._current.next;
        }
        this._current.next = node;
        this._end = this._current.next;
        this._end.prev = this._current;
        this._count++;
    }

    pop() {
        let val = this._end.data;
        this._current = this._head;
        while (this._current.next) {
            this._current = this._current.next;
        }
        this._end = this._end.prev;
        this._count--;
        return val;
    }

    shift() {
        let val = this._head.data;
        this._head = this._head.next;
        this._count--;
        return val;
    }

    unshift(data) {
        let node = new Node(data);
        this._current = this._head;
        if (!this._current) {
            this._head = node;
            this._end = this._head;
            this._count++;
            return;
        }
        this._head = node;
        this._head.next = this._current;
        this._current.prev = this._head;
    }

    delete(data) {
        this._current = this._head;
        while (data !== this._current.data && this._current.next) {
            this._current = this._current.next;
        }
        if (this._count > 1) {
            this._current.prev.next = this._current.next;
            this._current.next.prev = this._current.prev;
        }
        this._count--;
    }

    count() {
        return this._count;
    }
}

module.exports = LinkedList;