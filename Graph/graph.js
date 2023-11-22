class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
    }

    breadthFirstSearch(startVertex) {
        if (!this.adjacencyList[startVertex]) return null;
        const visited = new Set();
        const queue = [startVertex];
        let result = [];
        visited.add(startVertex);

        while (queue.length > 0) {
            let currVertex = queue.shift();
            result.push(currVertex);

            for (let adjacentVertex of this.adjacencyList[currVertex]) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex);
                    queue.push(adjacentVertex);
                }
            }
        }
        return result;
    }

    depthFirstSearch(startVertex) {
        if (!this.adjacencyList[startVertex]) return null;
        const visited = new Set();
        let result = [];

        const dfs = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            for (let adjacentVertex of this.adjacencyList[vertex]) {
                if (!visited.has(adjacentVertex)) {
                    dfs(adjacentVertex);
                }
            }
        };

        dfs(startVertex);
        return result;
    }

    shortestPath(startVertex, endVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            const path = queue.shift();
            const currentVertex = path[path.length - 1];

            if (currentVertex === endVertex) {
                return path;
            }

            for (let adjacentVertex of this.adjacencyList[currentVertex]) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex);
                    const newPath = [...path, adjacentVertex];
                    queue.push(newPath);
                }
            }
        }

        return null;
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
// graph.addVertex("F")

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("Shortest path", graph.shortestPath("A", "D"));

graph.display();
console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("A", "B");
// graph.display();

graph.removeVertex("A");
graph.display();

// console.log(graph.breadthFirstSearch("A"));
// console.log(graph.depthFirstSearch("A"));
