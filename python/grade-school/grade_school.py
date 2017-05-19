class School(object):
    def __init__(self, school):
    	self._grades = {}
    
    def add(self, student, grade):
    	if grade not in self._grades:
    		self._grades[grade] = set()
    	if student not in self._grades[grade]:
    		self._grades[grade].add(student)

    def grade(self, grade):
    	if grade not in self._grades:
    		return set()
    	return self._grades[grade]

    def sort(self):
    	return ((grade, tuple(sorted(students)))
        	for grade, students in self._grades.items())
