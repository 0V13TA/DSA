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
