"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    HashTable.prototype.set = function (key, value) {
        var hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
        console.log(this.data);
    };
    HashTable.prototype.get = function (key) {
        var hash = this._hash(key);
        if (!this.data[hash])
            return null;
        if (this.data[hash].length == 1) {
            return this.data[hash][0];
        }
        for (var i = 0; i < this.data[hash].length; i++) {
            if (this.data[hash][i][0] === key) {
                return this.data[hash][i][1];
            }
        }
        return null;
    };
    HashTable.prototype.keys = function () {
        var keysArray = [];
        for (var i = 0; i < this.data.length; i++) {
            //console.log(this.data[i]);
            if (this.data[i]) {
                for (var j = 0; j < this.data[i].length; j++) {
                    //console.log(this.data[i][j][0]);
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    };
    return HashTable;
}());
exports.default = HashTable;
