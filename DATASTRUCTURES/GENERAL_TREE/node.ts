export type NodeJson<T> = {
  value: T;
  children: NodeJson<T>[];
};

export class Node<T> {
  private readonly children: Node<T>[] = [];
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  public addChild(child: Node<T>): void {
    this.children.push(child);
  }

  public getChildren(): Node<T>[] {
    return this.children;
  }

  public getValue(): T {
    return this.value;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  public removeChild(child: Node<T>): void {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
  }

  public clearChildren(): void {
    this.children.length = 0;
  }

  public toString(): string {
    return `Node(value: ${this.value}, children: [${this.children
      .map((child) => child.toString())
      .join(", ")}])`;
  }

  public toJson(): object {
    return {
      value: this.value,
      children: this.children.map((child) => child.toJson())
    };
  }

  fromJson(child: NodeJson<T>): void {
    this.setValue(child.value);
    this.children.length = 0; // Clear existing children
    for (const childData of child.children) {
      const childNode = new Node<T>(childData.value);
      childNode.fromJson(childData);
      this.children.push(childNode);
    }
  }
}
