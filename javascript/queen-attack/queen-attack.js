class Queens {
    constructor(pos = { white: [0, 3], black: [7, 3] }) {
        this.white = pos.white;
        this.black = pos.black;
        this.pos = pos;
        if (!isValid(pos)) {
            throw 'Queens cannot share the same space';
        }
    }

    canAttack() {
        return (
            canAttackOrthogonally(this.pos)
            || canAttackDiagonally(this.pos)
        )
    }

    toString() {
        let chessboard = Array(8).fill().map(_ => Array(8).fill('_'));
        chessboard[this.white[0]][this.white[1]] = 'W';
        chessboard[this.black[0]][this.black[1]] = 'B';
        return chessboard.map(row => row.join(' ')).join('\n') + '\n';
    }
}

const canAttackOrthogonally = ({ white, black }) => white.some((v, idx) => v === black[idx]);

const canAttackDiagonally = ({ white, black }) => {
    const deltaX = Math.abs(white[0] - black[0]);
    const deltaY = Math.abs(white[1] - black[1]);
    return deltaY === deltaX;
};

const isValid = ({ white, black }) => white.some((v, idx) => v !== black[idx]);

module.exports = Queens;