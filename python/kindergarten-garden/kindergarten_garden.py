default_students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']
plants = { x[0]: x for x in ['Grass', 'Clover', 'Radishes', 'Violets'] }

class Garden(object):
    def __init__(self, garden, students=default_students):
    	students.sort()
    	g = garden.split()
        self._garden = { students[x/2]:self._get_plants(g, x) for x in range(0, len(g[0]), 2) }

    def _get_plants(self, g, x):
    	return [plants[g[0][x]], plants[g[0][x+1]], plants[g[1][x]], plants[g[1][x+1]]]

    def plants(self, student):
    	return self._garden[student]
