class ArrayList{

  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const last = this.array[this.length - 1];
    delete this.array[this.length - 1];
    this.length--;
    return last;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const del = this.array[this.index];
    //shift everything
    this._shiftDate(index);
    return del
  }

  _shiftData(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  serialize() {
    return this.data;
  }
}