export class Node<T> {
  private readonly children: Node<T>[] = [];
  private readonly value: T;

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

  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  public removeChild(child: Node<T>): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
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
}
