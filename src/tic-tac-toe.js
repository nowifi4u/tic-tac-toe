class TicTacToe {
    constructor() {
        this.field = [[null,null,null],
                      [null,null,null],
                      [null,null,null]];
        this.turn = true;
    }

    getCurrentPlayerSymbol() {
        return (this.turn) ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null){
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn = !this.turn;
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        for (let i = 0; i < 3; i++){
            if (this.field[i][0] !== null && this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2]) return this.field[i][0];
            if (this.field[0][i] !== null && this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i]) return this.field[0][i];
        }
        if (this.field[0][0] !== null && this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) return this.field[0][0];
        if (this.field[0][2] !== null && this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) return this.field[0][2];
        return null;
    }

    noMoreTurns() {
        for (let row of this.field){
            for (let square of row){
                if (square === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() !== null) return false;
        if (this.noMoreTurns()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
