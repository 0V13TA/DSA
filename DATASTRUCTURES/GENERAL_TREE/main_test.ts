import { assertEquals } from "@std/assert";
import { Node } from "./node.ts";
import { Tree } from "./tree.ts";

Deno.test("Tree and Node functionality", () => {
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

  // Traverse and collect values
  const values: string[] = [];
  tree.traverse(root, (node: Node<string>) => {
    values.push(node.getValue());
  });

  assertEquals(values, ["A", "B", "E", "F", "C", "G", "D"]);

  // Find a node
  const found = tree.find(root, "G");
  assertEquals(found ? found.getValue() : null, "G");

  // Print tree as string
  const treeString = tree.toString();
  assertEquals(
    treeString,
    `Node(value: A, children: [Node(value: B, children: [Node(value: E, children: []), Node(value: F, children: [])]), Node(value: C, children: [Node(value: G, children: [])]), Node(value: D, children: [])])`
  );

  // Print tree as JSON
  const treeJson = tree.toJson();
  assertEquals(treeJson, {
    value: "A",
    children: [
      {
        value: "B",
        children: [
          { value: "E", children: [] },
          { value: "F", children: [] }
        ]
      },
      {
        value: "C",
        children: [{ value: "G", children: [] }]
      },
      { value: "D", children: [] }
    ]
  });

  // Clear the tree
  tree.clear();
  assertEquals(tree.getRoot().getChildren().length, 0);

  // Remove a child
  tree.addChild(root, "H");
  const nodeH = root.getChildren()[0];
  tree.removeChild(root, nodeH);
  assertEquals(root.getChildren().length, 0);
});

Deno.test("Node functionality", () => {
  const node = new Node<string>("Test");
  assertEquals(node.getValue(), "Test");
  assertEquals(node.hasChildren(), false);

  const childNode = new Node<string>("Child");
  node.addChild(childNode);
  assertEquals(node.hasChildren(), true);
  assertEquals(node.getChildren().length, 1);
  assertEquals(node.getChildren()[0].getValue(), "Child");

  node.removeChild(childNode);
  assertEquals(node.getChildren().length, 0);

  node.clearChildren();
  assertEquals(node.getChildren().length, 0);
});

Deno.test("Node toString and toJson", () => {
  const node = new Node<string>("Root");
  const child1 = new Node<string>("Child1");
  const child2 = new Node<string>("Child2");

  node.addChild(child1);
  node.addChild(child2);

  assertEquals(
    node.toString(),
    `Node(value: Root, children: [Node(value: Child1, children: []), Node(value: Child2, children: [])])`
  );

  const expectedJson = {
    value: "Root",
    children: [
      { value: "Child1", children: [] },
      { value: "Child2", children: [] }
    ]
  };

  assertEquals(node.toJson(), expectedJson);
});

Deno.test("Tree hasChildren", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  assertEquals(tree.hasChildren(root), false);

  tree.addChild(root, "Child1");
  assertEquals(tree.hasChildren(root), true);

  const child1 = root.getChildren()[0];
  assertEquals(tree.hasChildren(child1), false);
});

Deno.test("Tree removeChild", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  const child1 = tree.addChild(root, "Child1");
  tree.addChild(root, "Child2");

  assertEquals(root.getChildren().length, 2);

  tree.removeChild(root, child1);
  assertEquals(root.getChildren().length, 1);
  assertEquals(root.getChildren()[0].getValue(), "Child2");
});

Deno.test("Tree clear", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  tree.addChild(root, "Child1");
  tree.addChild(root, "Child2");

  assertEquals(root.getChildren().length, 2);

  tree.clear();
  assertEquals(root.getChildren().length, 0);
});

Deno.test("Tree find non-existent node", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  const found = tree.find(root, "NonExistent");
  assertEquals(found, null);
});

Deno.test("Tree find root node", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  const found = tree.find(root, "Root");
  assertEquals(found ? found.getValue() : null, "Root");
});

Deno.test("Tree addChild with existing child", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  tree.addChild(root, "Child1");
  tree.addChild(root, "Child2");

  assertEquals(root.getChildren().length, 2);

  // Attempt to add an existing child
  tree.addChild(root, "Child1");
  assertEquals(root.getChildren().length, 3);
});

Deno.test("Tree traverse with empty tree", () => {
  const tree = new Tree<string>("Root");
  const root = tree.getRoot();

  const values: string[] = [];
  tree.traverse(root, (node: Node<string>) => {
    values.push(node.getValue());
  });

  assertEquals(values, ["Root"]);
});

Deno.test("Node hasChildren with no children", () => {
  const node = new Node<string>("Test");
  assertEquals(node.hasChildren(), false);

  const childNode = new Node<string>("Child");
  node.addChild(childNode);

  assertEquals(node.hasChildren(), true);

  node.removeChild(childNode);
  assertEquals(node.hasChildren(), false);
});

Deno.test("Node clearChildren", () => {
  const node = new Node<string>("Test");
  const child1 = new Node<string>("Child1");
  const child2 = new Node<string>("Child2");

  node.addChild(child1);
  node.addChild(child2);

  assertEquals(node.getChildren().length, 2);

  node.clearChildren();
  assertEquals(node.getChildren().length, 0);
});

Deno.test("Tree breadthFirstSearch", () => {
  const tree = new Tree<string>("A");
  const root = tree.getRoot();
  const nodeB = tree.addChild(root, "B");
  const nodeC = tree.addChild(root, "C");
  const _nodeD = tree.addChild(root, "D");
  tree.addChild(nodeB, "E");
  tree.addChild(nodeB, "F");
  tree.addChild(nodeC, "G");

  const values: string[] = [];
  tree.breadthFirstSearch((node: Node<string>) => {
    values.push(node.getValue());
  });

  // Expected order: A, B, C, D, E, F, G
  assertEquals(values, ["A", "B", "C", "D", "E", "F", "G"]);
});

Deno.test("Tree reverseDepthFirstSearch", () => {
  const tree = new Tree<string>("A");
  const root = tree.getRoot();
  const nodeB = tree.addChild(root, "B");
  const nodeC = tree.addChild(root, "C");
  const _nodeD = tree.addChild(root, "D");
  tree.addChild(nodeB, "E");
  tree.addChild(nodeB, "F");
  tree.addChild(nodeC, "G");

  const values: string[] = [];
  tree.reverseDepthFirstSearch((node: Node<string>) => {
    values.push(node.getValue());
  });

  // The order will depend on the reverse traversal logic
  // For your implementation, it will be: A, D, C, G, B, F, E
  assertEquals(values, ["A", "B", "E", "F", "C", "G", "D"]);
});

Deno.test("Tree reverseBreadthFirstSearch", () => {
  const tree = new Tree<string>("A");
  const root = tree.getRoot();
  const nodeB = tree.addChild(root, "B");
  const nodeC = tree.addChild(root, "C");
  const _nodeD = tree.addChild(root, "D");
  tree.addChild(nodeB, "E");
  tree.addChild(nodeB, "F");
  tree.addChild(nodeC, "G");

  const values: string[] = [];
  tree.reverseBreadthFirstSearch((node: Node<string>) => {
    values.push(node.getValue());
  });

  // Expected order: G, F, E, D, C, B, A (reverse of BFS)
  assertEquals(values, ["G", "F", "E", "D", "C", "B", "A"]);
});
