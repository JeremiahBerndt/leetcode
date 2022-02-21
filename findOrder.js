/*
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 I: a number of courses you have to take and an array of prerequisites
 O: an array of the course orders
 C: none
 E: none
 */
// var findOrder = function (numCourses, prereqs) {
//   // begin with a stack for DFS
//   const queue = [prereqs[0]];
//   const classSchedule = [];
//   //while there are items in the stack
//   while (queue.legnth) {
//     //iterate over prerequisites
//     let curr = queue.unshift();
//     for (let i = 1; i < prereqs.length; i++) {
//       if (prereqs[i][0] === curr[1]) {
//         queue.push(prereqs[i])
//       }
//     }
//     queue.push(prereqs[i])
//     if (!classSchedule.length) {
//       classSchedule.push(curr[1], curr[0])
//     } else if (classSchedule.includes(curr[0])) {
//       return [];
//     } else {
//       classSchedule.push(curr[0])
//     }
//   }
//   if (classSchedule.length >= numCourses) {
//     return classSchedule;
//   }
//   return [];
// };
const findOrder = (numCourses, prerequisites) => {
  const map = {};
  const cycle = new Set();
  const visited = new Set();
  const result = [];
  for (let i = 0; i < numCourses; i++) {
    map[i] = [];
    for (let prereq of prerequisites) {
      if (prereq[0] === map[i]) {
        map[i].push(prereq[1]);
      }
    }
  }
  const dfs = (prereq) => {
    console.log('prereq', prereq);
    if (cycle.has(prereq)) { return false };
    if (visited.has(prereq) || !map[prereq]) { return true };
    cycle.add(prereq);
    for (let oneReq of map[prereq]) {
      // console.log('prereqs for 1', map[prereq])
      if (!dfs(oneReq)) { return false }
    }
    cycle.delete(prereq);
    visited.add(prereq);
    result.push(prereq);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) { return [] }
  }
  return result;
}

const prereqs = [[1, 0], [2, 0], [3, 1], [3, 2]];
console.log(findOrder(4, prereqs))
/*
prereqs = [[1, 2], [2, 3], [3, 1]] => false

result = [4, 0, 2, 1]
check next item in stack, if item in stack require prereq, add to that place
prereqs = [[1, 2], [0, 4], [2, 0]]  => [1, 2], [2, 0], [0, 4]
i = 0
prereqs = [[1, 2], [0, 4], [2, 0]]
i = 1
check 2 if it exists in place b in all other tuples
get to the first answer that is at least numCourses long
*/