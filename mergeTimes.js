// Write a function merge_ranges() that takes a list of multiple meeting time ranges and returns a list of condensed ranges.

// For example, given:

const timeBlocks = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 },
];
/*
your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/
const mergeRanges = (times) => {
  let solution = [];
  times.sort((a, b) => {
    return a.startTime - b.startTime;
  })
  let changedBlock = times[0];
  for (let i = 1; i < times.length + 1; i++) {
    let currentBlock = times[i] || { startTime: Infinity };
    let prevBlock = times[i - 1];
    if (prevBlock.endTime >= currentBlock.startTime) {
      changedBlock.endTime = Math.max(currentBlock.endTime, changedBlock.endTime);
    } else {
      solution.push(changedBlock)
      changedBlock = currentBlock;
    }
  }
  return solution;
}

console.log(mergeRanges(timeBlocks))