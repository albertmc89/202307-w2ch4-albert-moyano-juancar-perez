class CodersArray {
  length = 0;

  constructor(...elementsCodersArray) {
    for (const element of elementsCodersArray) {
      this[this.length] = element;
      this.length++;
    }
  }
}
export default CodersArray;
