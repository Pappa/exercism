class WordProblem {

    constructor(problem) {
        this.problem = problem;
    }

    answer() {
        let operations = this.problem.match(opsRegExp);
        let numbers = this.problem.match(numsRegExp);

        if (!operations || !numbers) {
            throw new ArgumentError();
        }

        numbers = numbers.map(Number);
        let start = numbers.shift();
        
        return operations.reduce((acc, op, idx) => {
            return maths[op](acc, numbers[idx]);
        }, start);
    }

}

class ArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ArgumentError';
    }
}

module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError
};

const maths = {
    plus: (x, y) => x + y,
    minus: (x, y) => x - y,
    divided: (x, y) => x / y,
    multiplied: (x, y) => x * y
};
const opsRegExp = new RegExp(Object.keys(maths).join('|'), 'g');
const numsRegExp = /(-?[0-9]+)/g;