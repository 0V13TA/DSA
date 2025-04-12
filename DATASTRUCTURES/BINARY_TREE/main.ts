// Represents a node in the binary tree
class TreeNode<T> {
	parent: TreeNode<T> | null;
	value: T;
	children: [TreeNode<T> | null, TreeNode<T> | null]; // Allow null for empty child nodes

	constructor(value: T, parent: TreeNode<T> | null = null) {
		this.parent = parent;
		this.value = value;
		this.children = [null, null]; // Initialize children as null
	}

	// Returns the parent and value of the node
	getValue(): [TreeNode<T> | null, T] {
		return [this.parent, this.value];
	}
}

// Comparator class to compare two values
class Comparator<T> {
	compare(a: T, b: T): number {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	}
}

// Binary tree implementation
class BinaryTree<T> {
	private root: TreeNode<T> | null = null;
	private readonly comparator: Comparator<T>;

	constructor(comparator: Comparator<T>) {
		this.comparator = comparator;
	}

	// Inserts a value into the binary tree
	insert(value: T): void {
		const newNode = new TreeNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		this.insertNode(this.root, newNode);
	}

	// Helper method to recursively insert a node
	private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
		const direction =
			this.comparator.compare(newNode.value, node.value) < 0 ? 0 : 1; // 0 for left, 1 for right
		if (node.children[direction]) {
			this.insertNode(node.children[direction]!, newNode);
		} else {
			node.children[direction] = newNode;
			newNode.parent = node;
		}
	}
}

const Tree = new BinaryTree<number>(new Comparator<number>());
Tree.insert(5);
Tree.insert(3);
Tree.insert(7);
Tree.insert(2);

console.log(Tree);
