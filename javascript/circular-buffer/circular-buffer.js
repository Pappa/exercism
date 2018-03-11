function CircularBuffer(size) {
    let buffer = [];

    function read() {
        if (!buffer.length) {
            throw new BufferEmptyException();
        }
        return buffer.shift();
    }

    function write(data) {
        if (!data) {
            return;
        }
        if (buffer.length < size) {
            buffer.push(data);
        } else {
            throw new BufferFullException();
        }
    }

    function clear() {
        buffer = [];
    }

    function forceWrite(data) {
        if (buffer.length < size) {
            write(data);
        } else {
            buffer = buffer.slice(1)
            buffer.push(data);
        }

    }

    return {
        read: read,
        write: write,
        clear: clear,
        forceWrite: forceWrite
    };
}

function BufferEmptyException() {
    this.name = this.constructor.name;
    this.message = 'Buffer Empty';
}

function BufferFullException() {
    this.name = this.constructor.name;
    this.message = 'Buffer Full';
}

module.exports = {
    circularBuffer: function(capacity) {
        return new CircularBuffer(capacity);
    },

    bufferEmptyException: function() {
        return new BufferEmptyException();
    },

    bufferFullException: function() {
        return new BufferFullException();
    }
};