import Queue from "../Queue/queue";

function pathExsists(graph, startNode, endNode) {
  const queue = new Queue();
  queue.enqueue(startNode);
  const visited = { [startNode]: true };
  let paths = {};
  paths[startNode] = null;
  let found = false;
  while (queue.size > 0) {
    const currentNode = queue.dequeue();
    const neighbors = graph[currentNode];
    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        queue.enqueue(neighbor);
        visited[neighbor] = true;
        paths[neighbor] = currentNode;
      }
      if (currentNode === endNode) {
        found = true;
        break;
      }
    }
  }
  if (!found) {
    return [];
  }
  console.log("paths visited", JSON.stringify(paths));
  return getPath(paths, endNode);
}

function getPath(howWeReachedNodes, endNode) {
  const reversedShortestPath = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  return reversedShortestPath.reverse();
}

// Tests
const graph = {
  a: ["b", "c", "d"],
  b: ["a", "d"],
  c: ["a", "e", "g"],
  d: ["a", "b"],
  e: ["c"],
  f: ["g"],
  g: ["f"]
};

let bool = pathExsists(graph, "a", "f"); // [a, c, g, f]
console.log(bool);
