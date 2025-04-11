interface TreeNode {
	parent: TreeNode | null;
	value: any;
	children: [TreeNode, TreeNode];
}

class TreeNode {
	constructor(value: any, parent: TreeNode | null = null) {
		this.parent = parent;
		this.value = value;
	}
	getValue() {
		return [this.parent, this.value];
	}
}
