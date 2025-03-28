"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph_1 = require("./Graph");
var graph = new Graph_1.default();
console.log('Adding nodes 1 and 2 and connecting them.');
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2);
graph.showConnections();
console.log('Adding nodes 3 and 4 and connecting them to node 2.');
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.showConnections();
