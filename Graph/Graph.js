"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = /** @class */ (function () {
    function Graph() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    Graph.prototype.addVertex = function (value) {
        if (this.adjacentList[value])
            return this;
        this.adjacentList[value] = [];
        this.numberOfNodes++;
    };
    Graph.prototype.addEdge = function (node1, node2) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2])
            return this.adjacentList;
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    };
    Graph.prototype.showConnections = function () {
        var allNodes = Object.keys(this.adjacentList);
        for (var _i = 0, allNodes_1 = allNodes; _i < allNodes_1.length; _i++) {
            var node = allNodes_1[_i];
            var nodeConnections = this.adjacentList[node];
            var connections = "";
            var vertex = void 0;
            for (var _a = 0, nodeConnections_1 = nodeConnections; _a < nodeConnections_1.length; _a++) {
                vertex = nodeConnections_1[_a];
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    };
    return Graph;
}());
exports.default = Graph;
