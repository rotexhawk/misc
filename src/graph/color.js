class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function tail(arr) {
  const [_, ...tail] = arr;
  return tail;
}

function head(arr) {
  const [head, ..._] = arr;
  return head;
}

let graph = [];
const nodeA = new GraphNode("A");
nodeA.neighbors.add(nodeA);
graph = [nodeA];

const colors = ["red", "green", "blue"];

function colorGraph(graph, colors) {
  let result = true;
  graph.forEach(node => {
    if (!node.color && result) {
      const color = head(colors);
      const availableColors = tail(colors);
      node.color = color;
      const neighbors = [...node.neighbors];
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        const neighborColor = availableColors[i % availableColors.length];
        if (neighbor.color && !availableColors.includes(neighbor.color)) {
          result = false;
          break;
        } else {
          neighbor.color = neighborColor;
        }
      }
    }
  });
  return result;
}

let possible = colorGraph(graph, colors);

console.log("graph", possible);
