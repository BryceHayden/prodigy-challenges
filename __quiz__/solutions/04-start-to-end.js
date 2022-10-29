//This solution uses the recursive approach and can solve our diverging path.

let maze = {
  singlePath: {
    one: [
      ["X", "o", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "s", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
    ],
    two: [
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["-", "-", "X", "X"],
      ["-", "X", "X", "X"],
      ["-", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "o", "X", "X"],
    ],
    three: [
      ["X", "X", "o", "X", "X"],
      ["X", "X", "-", "X", "X"],
      ["-", "-", "-", "X", "X"],
      ["s", "X", "X", "X", "X"],
      ["-", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
    ],
    four: [
      ["o", "X", "X", "X", "X"],
      ["-", "X", "X", "X", "X"],
      ["-", "-", "-", "X", "X"],
      ["X", "X", "-", "X", "X"],
      ["X", "-", "-", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "s", "X", "X", "X"],
    ],
  },
  divergingPaths: {
    one: [
      ["X", "-", "X", "X"],
      ["X", "-", "-", "-"],
      ["-", "-", "X", "-"],
      ["s", "X", "X", "X"],
      ["-", "-", "-", "-"],
      ["X", "-", "X", "o"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
    ],
    two: [
      ["X", "-", "X", "X"],
      ["X", "-", "-", "-"],
      ["-", "-", "X", "o"],
      ["s", "X", "X", "X"],
      ["-", "-", "-", "-"],
      ["X", "-", "X", "-"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
    ],
  },
};

function findPath(maze, path = []) {
  const current = path.length ? path[path.length - 1] : null;
  if (current && maze[current.row][current.col] === "o") {
    return path;
  }

  if (current === null) {
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        if (maze[row][col] === "s") {
          return findPath(maze, [{ row, col }]);
        }
      }
    }

    return [];
  } else {
    let north = { row: current.row - 1, col: current.col, visited: false };
    let south = { row: current.row + 1, col: current.col, visited: false };
    let east = { row: current.row, col: current.col + 1, visited: false };
    let west = { row: current.row, col: current.col - 1, visited: false };

    path.forEach((spot) => {
      if (spot.row === north.row && spot.col === north.col) {
        north.visited = true;
      } else if (spot.row === east.row && spot.col === east.col) {
        east.visited = true;
      } else if (spot.row === south.row && spot.col === south.col) {
        south.visited = true;
      } else if (spot.row === west.row && spot.col === west.col) {
        west.visited = true;
      }
    });

    const checkNextSpot = ({ row, col, visited }) => {
      if (
        !visited &&
        row >= 0 &&
        row < maze.length &&
        col >= 0 &&
        col < maze[row].length &&
        (maze[row][col] === "-" || maze[row][col] === "o")
      ) {
        return findPath(maze, [...path, { row, col }]);
      }
    };

    let res = null;

    res = checkNextSpot(north);
    if (res) return res;

    res = checkNextSpot(east);
    if (res) return res;

    res = checkNextSpot(south);
    if (res) return res;

    res = checkNextSpot(west);
    if (res) return res;
  }
}

const convertPathObj = (path) => {
  // [{row: 2, col: 4}, {}, {}]
  return path.length
    ? path.reduce((acc, cur, index) => {
        if (!acc) {
          return "Start";
        }
        if (index === path.length - 1) {
          return `${acc} -> Exit`;
        }

        const previous = path[index - 1];
        const diff = {
          row: cur.row - previous.row,
          col: cur.col - previous.col,
        };

        // previous 0, 0
        // current  1, 0
        let next = " --> West";

        if (diff.row === 1 && diff.col === 0) {
          next = " --> South";
        } else if (diff.row === -1 && diff.col === 0) {
          //previous 1, 0
          //current  0, 0
          next = " --> North";
        } else if (diff.row === 0 && diff.col === 1) {
          // previous 0, 0 .... current 0, 1
          next = " --> East";
        }

        return `${acc} ${next}`;
      }, "")
    : "Can't Enter Maze";
};

const solveMaze = (maze) => {
  const pathObj = findPath(maze);

  const pathString = convertPathObj(pathObj);
  // Start -> North -> East -> End
  console.log(pathString);
};

//Alternate the commented out lines below to test against the harder logic
//   solveMaze(maze.singlePath.one);
// solveMaze(maze.singlePath.two);
// solveMaze(maze.singlePath.three);
// solveMaze(maze.singlePath.four);
solveMaze(maze.divergingPaths.one);
