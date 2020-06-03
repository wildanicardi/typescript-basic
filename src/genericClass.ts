class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }
  addList(element: T): void {
    this.data.push(element);
  }
  addMultipleList(...elements: T[]): void {
    this.data.push(...elements);
  }
  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
console.log(numbers.getAll());
numbers.addList(4);
console.log(numbers.getAll());

