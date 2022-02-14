// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

/*
 * @param {number[][]} isConnected
 * @return {number}
 */
// traverse the graph using 2 for loops
// from each starting point explore the land in each direction
// as land is explored, turn each piece of land to water
// count how many land masses we explored
const findCircleNum = function (isConnected) {
  // create total islands var
  let islands = 0;
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      // if current place is land
      let node = isConnected[i][j];
      if (node) {
        // add one to total islands
        islands++;
        // create a queue starting with current land node
        const queue = [node];
        // while there is land to the right or land below or there is a queue length
        let row = i, col = j;
        let lr = isConnected[row][col+1], ld = isConnected[row+1][col];
        while (lr || ld || queue.length) {
          // change each queue location to a zero
          let [i, j] = queue.pop();
          isConnected[i][j] = 0;
          // if right node is land
          if (lr) { queue.push([row, col]) row++ }
            // add right node to queue
          // if below node is land
          if (ld) { queue.push([row, col]) col++ }
            // add below node to queue
        }
      }
    }
  }
  //return total islands
  return islands;
};