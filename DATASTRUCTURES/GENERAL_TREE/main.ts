import { Tree } from "./tree.ts";
import { Node } from "./node.ts";

// Create a tree with root value 'A'
const tree = new Tree<string>("A");

// Add children to root
const root = tree.getRoot();
const nodeB = tree.addChild(root, "B");
const nodeC = tree.addChild(root, "C");
const _nodeD = tree.addChild(root, "D");

// Add children to nodeB
const _nodeE = tree.addChild(nodeB, "E");
const _nodeF = tree.addChild(nodeB, "F");

// Add child to nodeC
const _nodeG = tree.addChild(nodeC, "G");

// Traverse and print each node's value
console.log("Tree traversal:");
tree.traverse(root, (node: Node<string>) => {
  console.log(node.getValue());
});

// Find a node
const found = tree.find(root, "G");
console.log("Found node:", found ? found.toString() : "Not found");

// Print tree as string
console.log("Tree as string:");
console.log(tree.toString());

// Print tree as JSON
console.log("Tree as JSON:");
console.log(JSON.stringify(tree.toJson(), null, 2));

// Depth First Search
console.log("Depth First Search");
tree.depthFirstSearch((dan) => console.log(dan));

// Test code
console.log("Life");

const tree1 = new Tree<string>("A");
const root1 = tree1.getRoot();
const nodeB1 = tree1.addChild(root1, "B");
const nodeC1 = tree1.addChild(root1, "C");
const _nodeD1 = tree1.addChild(root1, "D");
tree1.addChild(nodeB1, "E");
tree1.addChild(nodeB1, "F");
tree1.addChild(nodeC1, "G");

const values: string[] = [];
tree1.reverseDepthFirstSearch((node: Node<string>) => {
  values.push(node.getValue());
});

console.log(values);
