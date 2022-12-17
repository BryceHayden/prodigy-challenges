const PLAY_X = "X";
const PLAY_O = "O";
let turn = PLAY_X;
let initialBoard = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let board = JSON.parse(JSON.stringify(initialBoard));
let count = 0;

const spotToBoard = new Map();

spotToBoard.set("1", { x: 0, y: 0 });
spotToBoard.set("2", { x: 0, y: 1 });
spotToBoard.set("3", { x: 0, y: 2 });
spotToBoard.set("4", { x: 1, y: 0 });
spotToBoard.set("5", { x: 1, y: 1 });
spotToBoard.set("6", { x: 1, y: 2 });
spotToBoard.set("7", { x: 2, y: 0 });
spotToBoard.set("8", { x: 2, y: 1 });
spotToBoard.set("9", { x: 2, y: 2 });

const updateBoard = (spot) => {
  count++;
  spot.innerHTML = turn;
  spot.setAttribute("disabled", true);
  const { x, y } = spotToBoard.get(spot.id);

  board[x][y] = turn;
};

// Func Check for winner
const checkForWinner = (id) => {
  const { x, y } = spotToBoard.get(id);
  // Check for the row that they clicked on
  if (board[x][0] === board[x][1] && board[x][0] === board[x][2]) {
    return "won";
  }
  // Check for the column that they clicked on
  else if (board[0][y] === board[1][y] && board[0][y] === board[2][y]) {
    return "won";
  } else if (count === board[0].length * board.length) {
    return "cat";
  } else if (
    board[0][0] !== "-" &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return "won";
  }

  // check forward slash diagonal
  // check back slash diagonal
  // else if () {

  // }

  return "continue";
};

// Func Switch player's turn
const switchPlayers = () => {
  turn = turn === PLAY_X ? PLAY_O : PLAY_X;
};
// Func Reset game
const resetGame = () => {
  for (let i = 1; i <= board.length * board[0].length; i++) {
    const spot = document.getElementById(i);
    spot.innerHTML = `-`;
    spot.removeAttribute("disabled");
  }

  turn = PLAY_X;
  board = JSON.parse(JSON.stringify(initialBoard));
};

// Func start game?

// On click game logic the onclick handler connecting HTML & JS
const onClickSpotGameLogic = (event) => {
  const spot = event.target;
  const id = spot.id;

  updateBoard(spot);
  const won = checkForWinner(id);

  if (won === "won") {
    document.getElementById("game_info").innerHTML = `${turn} won the game!!`;
  } else if (won === "cat") {
    document.getElementById("game_info").innerHTML = `Cat's game!!`;
  } else {
    switchPlayers();
  }

  // debugger;
};
