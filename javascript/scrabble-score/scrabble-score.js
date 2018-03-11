const scores = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

const scoreMap = Object.entries(scores)
    .reduce((acc, [score, letters]) => {
        letters.forEach(l => acc[l] = score);
        return acc;
    }, {});

module.exports = (word) => {
    return (word || '')
        .toUpperCase()
        .split('')
        .reduce((acc, c) => {
            return acc + Number(scoreMap[c]);
        }, 0);
}