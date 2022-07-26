//time o(e)
//space o(n) - storing all of our nodes in a set

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    longest = Math.max(longest, explore(graph, node, visited))
  }
  return longest;
}

const explore = (graph, current, visited) => {

  if (visited.has(current)) return 0; //make sure to stay consistent and return same type
  visited.add(current);
  let count = 1;

  for (let neighbor of graph[current]) {
    //this returns a number so you want to increment at each count
    count += explore(graph, neighbor, visited);
  }
  return count;
}


module.exports = {
  largestComponent,
}

/*
test_01:
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
test_02:
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
test_03:
largestComponent({}); // -> 0
test_04:
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3
*/