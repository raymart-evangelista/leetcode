/**
 * @param {character[][]} board
 * @return {boolean}
 */


/**
 * notes
 * brute force approach of creating a hashmap for each row then column
 * hashmap = {
 *  "0,0": {{0,0}, {0,1}, ..., {0,8}},
 *  "1,0": {{1,0}, {1,1}, ..., {1,8}},
 *  ...,
 *  "8,0": {{8,0}, {8,1}, ..., {8,8}}
 * }
 */

/**
 * less brute force approach of using math
 * and making one gigantic array out of all the sub arrays
 */

var isValidSudoku = function(board) {

  // let rowLength = board[0].length


  // check each row for repeats
  for (let i=0; i<board.length; i++) {
    let row = board[i]
    let numbers = {}
    for (let j=0; j<row.length; j++) {
      let value = row[j]
      if (numbers[value] && value != ".") {
        return false
      }
      if (!numbers[value]) {
        numbers[value] = true
      }
    }
    return true
  }

  for (let i=0; i<board.length; i++) {
    let row = board[i]
    let numbers = {}
  }

  // let flattenedBoard = board.flat()
  // // console.log(flattenedBoard)
  // for (let i=0; i<flattenedBoard.length; i++) {
  //   if (i % == 0) {
  //     console.log(flattenedBoard[i])
  //   }
  // }
};

// return true
let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// return false by column value repetition
let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// return false by row value repetition
let board3 = 
[["8","3",".","8","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board))
console.log(isValidSudoku(board3))