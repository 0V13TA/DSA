import { Node } from "./node.ts";

export class Tree<T> {
  private readonly root: Node<T>;

  constructor(rootValue: T) {
    this.root = new Node<T>(rootValue);
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
    callback(node);
    for (const child of node.getChildren()) {
      this.traverse(child, callback);
    }
  }

  public find(node: Node<T>, value: T): Node<T> | null {
    if (node.getValue() === value) return node;

    for (const child of node.getChildren()) {
      const found = this.find(child, value);
      if (found) return found;
    }

    return null;
  }

  public toJson(): object {
    return this.root.toJson();
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
}
