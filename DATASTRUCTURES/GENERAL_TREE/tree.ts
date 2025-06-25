import { Node, type NodeJson } from "./node.ts";

export class Tree<T> {
  private readonly root: Node<T>;

  constructor(rootValue: T, json?: NodeJson<T>) {
    this.root = new Node<T>(rootValue);
    if (json) {
      this.fromJson(json);
    }
  }

  public getRoot(): Node<T> {
    return this.root;
  }

  public addChild(parent: Node<T>, childValue: T): Node<T> {
    const childNode = new Node<T>(childValue);
    parent.addChild(childNode);
    return childNode;
  }

  public traverse(node: Node<T>, callback: (node: Node<T>) => void): void {
    const stack: Node<T>[] = [node];
    while (stack.length > 0) {
      const current = stack.pop()!;
      callback(current);
      // Add children in reverse to maintain order
      for (let i = current.getChildren().length - 1; i >= 0; i--) {
        stack.push(current.getChildren()[i]);
      }
    }
  }

  public find(node: Node<T>, value: T): Node<T> | null {
    const stack: Node<T>[] = [node];
    while (stack.length > 0) {
      const current = stack.pop()!;
      if (current.getValue() === value) return current;
      for (let i = current.getChildren().length - 1; i >= 0; i--) {
        stack.push(current.getChildren()[i]);
      }
    }
    return null;
  }

  public toJson(): { value: T; children: ReturnType<Node<T>["toJson"]>[] } {
    return {
      value: this.root.getValue(),
      children: this.root.getChildren().map((child) => child.toJson())
    };
  }

  public toString(): string {
    return this.root.toString();
  }

  public clear(): void {
    this.root.clearChildren();
  }

  public removeChild(parent: Node<T>, child: Node<T>): void {
    parent.removeChild(child);
  }

  public hasChildren(node: Node<T>): boolean {
    return node.hasChildren();
  }

  public depthFirstSearch(callback: (node: Node<T>) => void): void {
    this.traverse(this.root, callback);
  }

  public breadthFirstSearch(callback: (node: Node<T>) => void): void {
    const queue: Node<T>[] = [this.root];
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      callback(currentNode);
      for (const child of currentNode.getChildren()) {
        queue.push(child);
      }
    }
  }

  public reverseDepthFirstSearch(callback: (node: Node<T>) => void): void {
    const stack: Node<T>[] = [this.root];
    while (stack.length > 0) {
      const currentNode = stack.pop()!;
      callback(currentNode);
      for (const child of currentNode.getChildren().reverse()) {
        stack.push(child);
      }
    }
  }

  public reverseBreadthFirstSearch(callback: (node: Node<T>) => void): void {
    const queue: Node<T>[] = [this.root];
    const stack: Node<T>[] = [];

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      stack.push(currentNode);
      for (const child of currentNode.getChildren()) {
        queue.push(child);
      }
    }

    while (stack.length > 0) {
      const node = stack.pop()!;
      callback(node);
    }
  }

  public fromJson(value: NodeJson<T>) {
    this.root.setValue(value.value);
    this.root.clearChildren();
    for (const child of value.children) {
      const childNode = new Node<T>(child.value);
      this.root.addChild(childNode);
      if (child.children) {
        childNode.fromJson(child);
      }
    }
  }
}
