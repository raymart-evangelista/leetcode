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
  }

  // check each col for repeats
  // flatten 2d arr to 1d

  // to check columns, use math and hashmap
  // math in order to go traverse current column
  // math to change current column
  // hashmap to cross reference current checked numbers in hashmap
  // if value is already in hashmap, return false
  let flatBoard = board.flat()
  let colNumbers = {}
  for (let i=0; i<flatBoard.length; i++) {
    let column = (i / 9) | 0
    let index = (i % 9) * 9 + column

    let currentValue = flatBoard[index]

    if (colNumbers[currentValue] && currentValue != ".") {
      return false
    }

    if (!colNumbers[currentValue]) {
      colNumbers[currentValue] = true
    }

    // reset colNums every 9 iterations
    if (i % 9 == 8) {
      colNumbers = {}
    }
  }

  // to check for nine 3x3 sub-boxes,
  // math to check each number in the current sub-box
  // math to change current sub-box
  // hashmap to cross reference current checked numbers in hashmap
  // if value is already in hashmap, return false
  let subBoxIndex = 0
  let subBoxNumbers = {}
  for (let i=0; i<flatBoard.length; i++) {
    let currentValue = flatBoard[subBoxIndex]
    // after every 3 iterations, increase subBoxIndex number by 7
    // console.log(flatBoard[subBoxIndex + i])

    if (subBoxNumbers[currentValue] && currentValue != ".") {
      return false
    }

    if (!subBoxNumbers[currentValue]) {
      subBoxNumbers[currentValue] = true
    }

    console.log(subBoxIndex)

    // after 9 iterations, go to next quadrant, 9 quadrants in total (minus 17)
    if (i % 8 == 0 && i != 0) {
      console.log(subBoxNumbers)
      // reset hashmap
      subBoxNumbers = {}
      // move onto next quad
      subBoxIndex = subBoxIndex - 17
    } else if (i % 3 == 2) {
      subBoxIndex += 7
    } else {
      subBoxIndex += 1
    }

    // if (i % 3 == 2) {
    // } else {
    //   subBoxIndex += 1
    // }




    // after 3 quadrants or 27 iterations, change index number by 1
  }
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

// return false by column 2 value repetition
let board2half = 
[["8","3",".",".","7",".",".",".","."]
,["6","3",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["1",".",".",".","6",".",".",".","3"]
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
console.log(isValidSudoku(board))