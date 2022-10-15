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
      ["X", "s", "X", "X"],
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
  /*
      Old solution was: Check if we are on the last row...if so we are out 
      New Solution: Change the conditional here to see if it is 
      o (instead of the row) this is the new out of the maze indicator 
    */
  if (current?.row === maze.length - 1) {
    return path;
  }

  if (current === null) {
    /* 
        New solution convert back to nested for loops so you can find the
        location of the 's'
    */
    for (let i = 0; i < maze[0].length; i++) {
      /* 
        change conditional logic to look for 's' as your starting point
        and pass in the location(row & col) to findPath
        */
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
        /* 
          New solution: we can also move to the o location
          so update this conditional check
        */
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
  // Change the logic here so instead of outputting the
  // coordinates, output the directions like so:
  // start --> south --> east --> east --> north --> out
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

solveMaze(maze.singlePath.one);
// solveMaze(maze.singlePath.two);
// solveMaze(maze.singlePath.three);
// solveMaze(maze.singlePath.four);
// solveMaze(maze.divergingPaths.one);
// solveMaze(maze.divergingPaths.two);
