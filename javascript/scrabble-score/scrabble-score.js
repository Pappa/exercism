const scores = {
    1: 'AEIOULNRST',
    2: 'DG',
    3: 'BCMP',
    4: 'FHVWY',
    5: 'K',
    8: 'JX',
    10: 'QZ'
};

const scoreMap = Object.entries(scores)
    .reduce((acc, [score, [...letters]]) => {
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