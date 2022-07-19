class hashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  //hashing function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    //ensures that it wont exceed bucket size
    return hash % this.table.length;
  }

  //set
  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  //get
  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  //remove
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}