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
  // create a queue
  const q = [[sr, sc, 0]];
  // create a seen object or map, assign seenNodes as distance from start
  const seenNodes = {};
  // while there is a queue length
  while (q.length) {
    // take first node in queue
    let [sr, sc, depth] = q.shift(0)
    seenNodes[`${sr, sc}`] = true;
    // if node has top node of 1, add to queue (and node coords have not been seen)
    if (!seenNodes[`${sr - 1, sc}`] && [grid[sr - 1] && grid[sr - 1][sc] === 1) {
      q.push([sr - 1, sc, depth + 1])
    }
    if (!seenNodes[`${sr - 1, sc}`] && [grid[sr - 1] && grid[sr - 1][sc] === 1) {
        q.push([sr - 1, sc, depth + 1])
      }
    if (!seenNodes[`${sr - 1, sc}`] && [grid[sr - 1] && grid[sr - 1][sc] === 1) {
          q.push([sr - 1, sc, depth + 1])
        }
    if (!seenNodes[`${sr - 1, sc}`] && [grid[sr - 1] && grid[sr - 1][sc] === 1) {
            q.push([sr - 1, sc, depth + 1])
          }
  }
  // if node has right node of 1, add to queue
  // if node has bottom node of 1, add to queue
  // if node has left node of 1, add to queue
  // increment steps
  // if we find target node, or all neighbors are 0 or boundary or been visited
  // check if total steps is less than current step number, and subtract from steps
  //return least steps



  // check left, right, up, and down for one coord
  // do the check again when we arrive at new coord
}