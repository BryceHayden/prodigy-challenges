//This solution uses the recursive approach and can solve our diverging path.

let maze = {
  singlePath: {
    one: [
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
      ["X", "-", "X", "X"],
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
      ["X", "-", "X", "X"],
    ],
    three: [
      ["X", "X", "-", "X", "X"],
      ["X", "X", "-", "X", "X"],
      ["-", "-", "-", "X", "X"],
      ["-", "X", "X", "X", "X"],
      ["-", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
    ],
    four: [
      ["-", "X", "X", "X", "X"],
      ["-", "X", "X", "X", "X"],
      ["-", "-", "-", "X", "X"],
      ["X", "X", "-", "X", "X"],
      ["X", "-", "-", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
      ["X", "-", "X", "X", "X"],
    ],
  },
  divergingPaths: {
    one: [
      ["X", "-", "X", "X"],
      ["X", "-", "-", "-"],
      ["-", "-", "X", "-"],
      ["-", "X", "X", "X"],
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
  if (current?.row === maze.length - 1) {
    return path;
  }

  if (current === null) {
    for (let i = 0; i < maze[0].length; i++) {
      if (maze[0][i] === "-") {
        return findPath(maze, [{ row: 0, col: i }]);
      }
    }
  } else {
    let north = { row: current.row - 1, col: current.col, visited: false };
    let east = { row: current.row, col: current.col + 1, visited: false };
    let south = { row: current.row + 1, col: current.col, visited: false };
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
        maze[row][col] === "-"
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

  return false;
}

const convertPathObj = (path) => {
  return path.reduce((prev, cur) => {
    let current = `(${cur.row}, ${cur.col})`;
    return !prev ? current : `${prev} --> ${current}`;
  }, "");
};

const solveMaze = (maze) => {
  const pathObj = findPath(maze);
  const pathString = convertPathObj(pathObj);
  console.log(pathString);
};

//Alternate the commented out lines below to test against the harder logic
solveMaze(maze.singlePath.one);
solveMaze(maze.singlePath.two);
solveMaze(maze.singlePath.three);
solveMaze(maze.singlePath.four);
solveMaze(maze.divergingPaths.one);
