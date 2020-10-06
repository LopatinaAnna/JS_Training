'use strict'

const snakeArray = (snakeStart) => {
    let result = new Array(6).fill(0).map(() => new Array(7).fill(0));

    let current = snakeStart;
    let startCol = 0;
    let endCol = 6;
    let startRow = 0;
    let endRow = 5;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = current;
            current++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = current;
            current++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = current;
            current++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = current;
            current++;
        }
        startCol++;
    }

    return result;
}

module.exports = snakeArray;