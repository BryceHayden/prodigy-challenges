let board = [
  ['X','-','X'],
  ['-','-','-'],
  ['-','-','-']
]

const hashmap = {
  1: {x: 0, y: 0},
  2: {x: 0, y: 1},
  3: {x: 0, y: 2},
  4: {x: 1, y: 0},
  5: {x: 1, y: 1},
  6: {x: 1, y: 2},
  7: {x: 2, y: 0},
  8: {x: 2, y: 1},
  9: {x: 2, y: 2}
}

const map = new Map()

map.set('1', {x: 0, y: 0})
map.set('2', {x: 0, y: 1})
map.set('3', {x: 0, y: 2})
map.set('4', {x: 1, y: 0})
map.set('5', {x: 1, y: 1})
map.set('6', {x: 1, y: 2})
map.set('7', {x: 2, y: 0})
map.set('8', {x: 2, y: 1})
map.set('9', {x: 2, y: 2})


const updateBoard = () => {}
const checkForWin =() => {}
const resetBoard = () => {}
const aiPlayer = () => {}
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Where do you want to play? ", (spot) => {
  console.log("SPOT", spot)
  if(!map.get(spot)) {
    console.log("Hey what are you trying to do??")
  } else {
    const { x, y} = map.get(spot)
    board[x][y] = spot
  }

  console.log(`${board[0]} \n ${board[1]} \n ${board[2]}`);
  readline.close();
});



// const checkRow = (row = [], ) => {
//   if(row[0] === '-') { return false}
//   return row.every(element => element === row[0])
// }

// if(checkRow(board[0])) {
//   console.log(`${board[0][0]} wins the game`)
// } else {
//   console.log("KEEP PLAYING")
// }