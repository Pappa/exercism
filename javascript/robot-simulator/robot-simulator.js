class Robot {

    constructor(bearing = BEARINGS[0]) {
        this.bearing = bearing;
    }

    orient(bearing) {
        if (!BEARINGS.includes(bearing)) {
            throw new Error('Invalid Robot Bearing');
        }
        this.bearing = bearing;
    }

    turnLeft() {
        const idx = BEARINGS.indexOf(this.bearing);
        this.bearing = BEARINGS[(idx + 3) % 4];
    }

    turnRight() {
        const idx = BEARINGS.indexOf(this.bearing);
        this.bearing = BEARINGS[(idx + 1) % 4];
    }

    at(...coords) {
        this.coordinates = coords;
    }

    advance() {
        this.coordinates = DIRECTIONS[this.bearing](...this.coordinates);
    }

    instructions(actions) {
        return [...actions].map(a => ACTIONS[a]);
    }

    place(data) {
        this.at(data.x, data.y);
        this.orient(data.direction);
    }

    evaluate(actions) {
        [...actions].forEach(action => this[ACTIONS[action]]());
    }

}

module.exports = Robot;

const ACTIONS = {
    A: 'advance',
    L: 'turnLeft',
    R: 'turnRight'
};
const DIRECTIONS = {
    north: (x, y) => [x, y + 1],
    east: (x, y) => [x + 1, y],
    south: (x, y) => [x, y - 1],
    west: (x, y) => [x - 1, y]
};
const BEARINGS = Object.keys(DIRECTIONS);