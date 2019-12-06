import Queue from "../Queue/queue";

function pathExsists(graph, startNode, endNode) {
  const queue = new Queue();
  queue.enqueue(graph[startNode]);
  const visited = { [startNode]: true };
  const paths = [startNode];
  while (queue.size > 0) {
    const neighbors = queue.dequeue();
    for (let node of neighbors) {
      if (!visited[node]) {
        queue.enqueue(graph[node]);
        visited[node] = true;
        paths.push(node);
      }
      if (node === endNode) {
        return true;
      }
    }
  }
  return false;
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

let bool = pathExsists(graph, "a", "f");
console.log(bool);
