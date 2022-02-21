/*
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.
Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.
If the task is impossible, return -1.

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011
*/
/*
@param grid: integer[][]
@param sr: integer
@param sc: integer
@param tr: integer
@param tc: integer
@return: integer

1111
0001
1011
*/


function shortestCellPath(grid, sr, sc, tr, tc) {
  // your code goes here
  const q = [[sr, sc, 0]];
  const seenNodes = {};
  const direct = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const yl = grid.length;
  const xl = grid[0].length;

  const path = (x, y) => {
    if (!grid[x][y] || seenNodes[`${x}` + `${y}`]) {
      return false;
    }
    return true;
  }

  while (q.length) {
    let [sr, sc, depth] = q.shift(0)
    seenNodes[`${sr}` + `${sc}`] = true;
    if (sr === tr && sc === tc) { return depth; }
    for (let tup of direct) {
      let newSR = tup[0] + sr;
      let newSC = tup[1] + sc;
      if (newSR < yl && newSC < xl && !(newSR < 0 || newSC < 0)) {
        if (path(newSR, newSC)) {
          q.push([newSR, newSC, depth + 1])
        }
      }
    }
  }
  return -1;
};

const grid1 = [[0, 0, 0, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
console.log(shortestCellPath(grid1, 0, 3, 2, 0))
  // if node has right node of 1, add to queue
  // if node has bottom node of 1, add to queue
  // if node has left node of 1, add to queue
  // increment steps
  // if we find target node, or all neighbors are 0 or boundary or been visited
  // check if total steps is less than current step number, and subtract from steps
  //return least steps



  // check left, right, up, and down for one coord
  // do the check again when we arrive at new coord
