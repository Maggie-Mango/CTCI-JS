
var Trie = function() {
    this.data = [];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (this.data.indexOf(word) === -1) {
       this.data.push(word) 
    }
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (this.data.indexOf(word) > -1) {
       return true; 
    } 
    
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype._checkWords = function(word1, prefix) {
    let count = 0
    while (count < prefix.length ) {
        if (word1[count] !== prefix[count]) {
            return false;
        }
        count++;
    }
    return true
}

Trie.prototype.startsWith = function(prefix) {
    let result = false;
    for (let i = 0; i < this.data.length; i++) {
        //check if first the same
        if (this.data[i][0] === prefix[0]) {
            if (this._checkWords(this.data[i], prefix) === true) {
                result = true;
                break;
            }
        }
    }
    return result;
};



/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */