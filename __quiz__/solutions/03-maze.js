//Feel free to add more of your own mazes to test your logic
//You're looking to generate the following outcome (with different coordinates based on the maze)
//outcome: "0,1 --> 1,1 --> 2,1 --> 3,1 --> 4,1 --> 5,1 --> 6,1 --> 7,1";
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

//This is a algorithm to solve the maze using logic...notice that
//it doesn't solve the diverging path maze correctly and instead
//list all of the dashes/paths in the maze and combines them.
function solveMazeWithStrings(maze) {
  let path = [];

  for (let row = 0; row < maze.length; row++) {
    let tempDashes = [];

    for (let col = 0; col < maze[row].length; col++) {
      const location = maze[row][col];
      const coordinates = `(${row}, ${col})`;
      let previousCol = -1;
      //We made a ton of work by saving to path as a fancy string
      if (path.length) {
        const temp = path[path.length - 1]
          .replace("(", "")
          .replace(")", "")
          .split(",");
        previousCol = parseInt(temp[temp.length - 1]);
      }

      if (location === "-") {
        if (col === previousCol || col > previousCol) {
          path.push(coordinates);
        } else if (col < previousCol) {
          tempDashes.unshift(coordinates);
        }
      }

      if (col === maze[row].length - 1) {
        // path = path.concat(temp)
        path = [...path, ...tempDashes];
        tempDashes = [];
      }
    }
  }

  return path.join(" --> ");
}

// This one uses coordinates in our path array not strings
function solveMaze(maze) {
  let path = [];

  for (let row = 0; row < maze.length; row++) {
    let tempDashes = [];

    for (let col = 0; col < maze[row].length; col++) {
      const location = maze[row][col];
      const coordinates = { row, col };
      let previousCol = path.length ? path[path.length - 1].col : -1;

      if (location === "-") {
        if (col === previousCol || col > previousCol) {
          path.push(coordinates);
        } else if (col < previousCol) {
          tempDashes.unshift(coordinates);
        }
      }

      if (col === maze[row].length - 1) {
        // path = path.concat(temp)
        path = [...path, ...tempDashes];
        tempDashes = [];
      }
    }
  }
  return path.reduce((prev, cur) => {
    let current = `(${cur.row}, ${cur.col})`;
    return !prev ? current : `${prev} --> ${current}`;
  }, "");
}

//Alternate the commented out lines below to test against the harder logic
const results = solveMaze(maze.singlePath.one);
// const results = solveMaze(maze.singlePath.two);
// const results = solveMaze(maze.singlePath.three);
// const results = solveMaze(maze.singlePath.four);
// const results = solveMaze(maze.divergingPaths.one);

console.log(results);
