import Queue from "../Queue/queue";

function pathExsists(graph, startNode, endNode) {
  const queue = new Queue();
  queue.enqueue(graph[startNode]);
  const visited = { [startNode]: true };
  const paths = [startNode];
  let found = false;
  while (queue.size > 0) {
    const neighbors = queue.dequeue();
    for (let node of neighbors) {
      if (!visited[node]) {
        queue.enqueue(graph[node]);
        visited[node] = true;

        paths.push(node);
      }
      if (node === endNode) {
        found = true;
        break;
      }
    }
  }
  if (!found) {
    return [];
  }
  console.log("paths visited", JSON.stringify(paths));
  return getPath(graph, paths, startNode);
}

function getPath(graph, pathsVisited, startNode) {
  const paths = [];
  let visited = {};
  let canMakePath = true;
  let i = pathsVisited.length - 1;
  while (canMakePath) {
    let path = pathsVisited[i];
    if (path === startNode) {
      canMakePath = false;
    }
    if (!visited[path]) {
      visited[path] = true;
      paths.push(path);
      console.log("wtf", JSON.stringify(pathsVisited));
      pathsVisited.splice(i, 0, ...graph[path]);
      console.log(JSON.stringify(pathsVisited));
      console.log(path, ...graph[path]);
    }
  }
  return paths.reverse();
}

// Tests
const graph = {
  a: ["b", "c", "d"],
  b: ["a", "d"],
  c: ["a", "e"],
  d: ["a", "b"],
  e: ["c"],
  f: ["g"],
  g: ["f"]
};

let bool = pathExsists(graph, "d", "c");
console.log(bool);
