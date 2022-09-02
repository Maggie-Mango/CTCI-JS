const islandCount = (grid) => {
  //designate positions
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      //traverse
      if (explore(grid, r, c, visited) === true) {
        count++
      }
    }
  }
  return count;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  if (grid[row][col] === 'W') return false;
  const pos = row + ',' + col;

  if (visited.has(pos)) return false;
  visited.add(pos);

  //dfs
  //look above
  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
};

module.exports = {
  islandCount,
};


  const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

//console.log(islandCount(grid)); // -> 3