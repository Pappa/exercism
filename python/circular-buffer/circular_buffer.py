class BufferFullException(Exception):
    pass


class BufferEmptyException(Exception):
    pass


class CircularBuffer(object):
    def __init__(self, size):
        self._size = size
        self._data = []

    def write(self, data):
        if len(self._data) >= self._size:
            raise BufferFullException('Buffer full')
        else:
            self._data.append(data)

    def read(self):
        if len(self._data):
            return self._data.pop(0)
        else:
            raise BufferEmptyException('Buffer empty')

    def overwrite(self, data):
        if len(self._data) < self._size:
            self.write(data)
        else:
            self._data = self._data[1::] + [data]

    def clear(self):
        self._data = []

