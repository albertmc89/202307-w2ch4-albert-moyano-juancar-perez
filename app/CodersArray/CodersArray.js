class CodersArray {
  length = 0;

  constructor(...elementsCodersArray) {
    this.elements = [];

    for (const element of elementsCodersArray) {
      this.elements[this.length] = element;
      this.length++;
    }
  }

  push(...elementsToAddInCodersArray) {
    for (const element of elementsToAddInCodersArray) {
      this.elements[this.length] = element;
      this.length++;
    }
  }
}

export default CodersArray;
