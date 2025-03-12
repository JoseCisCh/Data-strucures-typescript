export default class Graph {

    numberOfNodes: number;
    adjacentList: Object;

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(value: number) {
        if(this.adjacentList[value]) return this;

        this.adjacentList[value] = [];
        this.numberOfNodes++;
        return this;
    }

    addEdge(node1: number, node2: number) {
        if(!this.adjacentList[node1] || !this.adjacentList[node2]) return this;

        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);

        return this;
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList); 
        for (let node of allNodes) { 
            let nodeConnections = this.adjacentList[node]; 
            let connections = ""; 
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            } 
            console.log(node + "-->" + connections); 
        } 
    }
}