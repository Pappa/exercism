class WordProblem {

    constructor(problem) {
        this.sum = parseProblem(problem);
    }

    answer() {
        try {
            return eval(this.sum);
        } catch (e) {
            throw new ArgumentError();
        }
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

function parseProblem(problem) {
    problem = problem.substring(8, problem.length - 1);

    replacements.forEach(r => {
        problem  = problem.replace(new RegExp(r.find, 'g'), r.replace);
    });
    problem = addBrackets(problem);
    return problem;
}

function addBrackets(problem) {
    let parts = problem.split(' ');
    if (parts.length === 5) {
        parts.unshift('(');
        parts.splice(4, 0, ')');
        problem =  parts.join(' ');
    }
    return problem;
}

const replacements = [
    {
        find: 'plus',
        replace: '+'
    },
    {
        find: 'minus',
        replace: '-'
    },
    {
        find: 'multiplied by',
        replace: '*'
    },
    {
        find: 'divided by',
        replace: '/'
    }
]