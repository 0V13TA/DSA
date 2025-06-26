import { Tree } from "./tree.ts";
import { Node } from "./node.ts";

// Example 1: Creating a tree and adding nodes
console.log("=== Example 1: Creating a tree and adding nodes ===");
const tree = new Tree<string>("A"); // Create a tree with root value 'A'
const root = tree.getRoot();

const nodeB = tree.addChild(root, "B");
const nodeC = tree.addChild(root, "C");
const _nodeD = tree.addChild(root, "D");

tree.addChild(nodeB, "E");
tree.addChild(nodeB, "F");
tree.addChild(nodeC, "G");

// Example 2: Traversing the tree (Depth-First)
console.log("\n=== Example 2: Traversing the tree (Depth-First) ===");
tree.traverse(root, (node: Node<string>) => {
  console.log(node.getValue());
});
// Output: A, B, E, F, C, G, D

// Example 3: Finding a node
console.log("\n=== Example 3: Finding a node ===");
const found = tree.find(root, "G");
console.log(found ? `Found node: ${found.getValue()}` : "Node not found");

// Example 4: Printing the tree as a string
console.log("\n=== Example 4: Printing the tree as a string ===");
console.log(tree.toString());

// Example 5: Printing the tree as JSON
console.log("\n=== Example 5: Printing the tree as JSON ===");
console.log(JSON.stringify(tree.toJson(), null, 2));

// Example 6: Using breadth-first search
console.log("\n=== Example 6: Breadth-First Search ===");
tree.breadthFirstSearch((node: Node<string>) => {
  console.log(node.getValue());
});
// Output: A, B, C, D, E, F, G

// Example 7: Clearing the tree
console.log("\n=== Example 7: Clearing the tree ===");
tree.clear();
console.log("Children of root after clear:", root.getChildren().length); // 0

// Example 8: Reconstructing a tree from JSON
console.log("\n=== Example 8: Reconstructing a tree from JSON ===");
const json = {
  value: "X",
  children: [
    { value: "Y", children: [] },
    { value: "Z", children: [{ value: "W", children: [] }] }
  ]
};
tree.fromJson(json);
console.log(tree.toString());
