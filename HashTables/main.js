"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashTable_1 = require("./HashTable");
var hash = new HashTable_1.default(4);
hash.set('Jose', 26);
hash.set('Ale', 17);
hash.set('Ana', 28);
hash.set('Maru', 25);
hash.set('Luis', 30);
hash.set('Iñigo', 27);
hash.set('Diego', 30);
hash.set('Juan', 30);
hash.set('Pepe', 30);
// console.log('Jose ' + hash.get('Jose'));
// console.log('Ale ' + hash.get('Ale'));
console.log(hash.keys());
