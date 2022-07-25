


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