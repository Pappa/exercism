const TYPES = ['{}', '[]', '()'];

const isValid = (input) => TYPES.some(t => input.includes(t));

const brackets = (input) => {
    if (input.length === 0) {
        return true;
    }
    if (!isValid(input)) {
        return false;
    }
    const br = TYPES.reduce((acc, curr) => input.includes(curr) ? curr : acc, '');
    return brackets(input.split(br).join(''));
};

module.exports = brackets;