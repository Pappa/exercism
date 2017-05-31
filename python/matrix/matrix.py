class Matrix(object):
    def __init__(self, txt):
        self.rows = [[int(x) for x in row.split(' ')] for row in txt.split('\n')]
        self.columns = [[row[x] for row in self.rows] for x in range(len(self.rows) - 1)]
