NORTH = 'N'
EAST  = 'E'
SOUTH = 'S'
WEST  = 'W'

class Robot:

	def __init__(self, direction=NORTH, x=0, y=0):
		self.coordinates = (x, y)
		self.bearing = direction
		self.__actions = {
			'A': self.advance,
			'L': self.turn_left,
			'R': self.turn_right,
			NORTH: lambda (x, y): (x, y+1),
			EAST: lambda (x, y): (x+1, y),
			SOUTH: lambda (x, y): (x, y-1),
			WEST: lambda (x, y): (x-1, y),
		}
		self.__bearings = [ NORTH, EAST, SOUTH, WEST ]

	def advance(self):
		self.coordinates = self.__actions[self.bearing](self.coordinates)

	def turn_right(self):
		idx = self.__bearings.index(self.bearing)
		self.bearing = self.__bearings[(idx + 1) % 4]

	def turn_left(self):
		idx = self.__bearings.index(self.bearing)
		self.bearing = self.__bearings[(idx + 3) % 4]

	def simulate(self, instructions):
		map(lambda i: self.__actions[i](), instructions)


