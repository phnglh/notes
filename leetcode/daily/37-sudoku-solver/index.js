/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(r, c, ch) {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === ch) return false;
        }
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === ch) return false;
        }
        let br = Math.floor(r / 3) * 3;
        let bc = Math.floor(c / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[br + i][bc + j] === ch) return false;
            }
        }
        return true;
    }

    function backtrack() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    for (let ch = 1; ch <= 9; ch++) {
                        let val = ch.toString();
                        if (isValid(i, j, val)) {
                            board[i][j] = val;
                            if (backtrack()) return true;
                            board[i][j] = "."; 
                        }
                    }
                    return false;
                }
            }
        }
        return true; 
    }

    backtrack();
};

let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);
console.log(board);
