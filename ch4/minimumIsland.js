const minimumIsland = (grid) => {
  let minSize = Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const explore = (grid, r, c, visited) => {
  const pos = r + ',' + c;

  const inboundRow = r >= 0 && r < grid.length;
  const inboundCol = c >= 0 && c < grid[0].length;
  if (!inboundRow || !inboundCol) return 0;
  if (grid[r][c] === 'W') return 0;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let count = 1;
  count += explore(grid, r + 1, c, visited);
  count += explore(grid, r - 1, c, visited);
  count += explore(grid, r, c + 1, visited);
  count += explore(grid, r, c - 1, visited);

  return count;
}

module.exports = {
  minimumIsland,
};