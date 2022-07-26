const connectedCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for let (node in graph) {
    //gives us keys
    //common bug is converting key to string which will store in Set
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return true;
}

const explore = (graph, current, visited) => {
  //base case
  if (visited.has(String(current))) return false;

  visited.add(String(current));
  //iterate each current until you hit end
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  //in order to rturn true, all neighbors must be explored
  return true;
}

module.exports = {
  connectedCount,
}