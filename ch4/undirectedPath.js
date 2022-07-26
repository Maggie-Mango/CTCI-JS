//Time O(e) with e being edges
//Space O(n) with n being nodes
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set())
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neibhor, dst, visited) === true) {
      return true;
    }
  }
  return false;
}

const buildGraph = (edges) => {
  //an edge is a pair [a, b]

  const graph = {};

  for (let edge of edges) {
    if (!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

module.exports = {
  undirectedPath
}