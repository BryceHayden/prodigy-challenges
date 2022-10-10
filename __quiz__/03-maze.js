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

function solveMaze(maze) {
  return "implement me!!";
}

//Alternate the commented out lines below to test against the harder logic
const results = solveMaze(maze.singlePath.one);
// const results = solveMaze(maze.singlePath.two);
// const results = solveMaze(maze.singlePath.three);
// const results = solveMaze(maze.singlePath.four);
// const results = solveMaze(maze.divergingPaths.one)

console.log(results);
