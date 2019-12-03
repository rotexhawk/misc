class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

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
  // Find the shortest route in the network between the two users

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
