export function findShortestPath(rooms, hallways, startRoom, endRoom) {
  
    const roomToNode = {};
    rooms.forEach(room => {
        const roomId = room[1].toString() + (room[2] || "");
        roomToNode[roomId] = room[3];
    });

    const startNode = roomToNode[startRoom];
    const endNode = roomToNode[endRoom];
    if (startNode === undefined || endNode === undefined) {
        return [];
    }

    const graph = {};
    const coordMap = {};
    hallways.forEach(h => {
        const node = h[0];
        const connections = h[1];
        const weights = h[2];
        graph[node] = {};
        connections.forEach((conn, i) => {
            graph[node][conn] = weights[i];
        });
        coordMap[node] = h.slice(3, 6);
    });

    const distances = {};
    const previous = {};
    const visited = new Set();

    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
        previous[node] = null;
    });
    distances[startNode] = 0;

    while (true) {
        let current = null;
        let minDist = Infinity;
        for (const node in distances) {
            if (!visited.has(node) && distances[node] < minDist) {
                minDist = distances[node];
                current = node;
            }
        }

        if (current === null || current === endNode) {
            break;
        }

        visited.add(current);

        for (const neighbor in graph[current]) {
            if (visited.has(neighbor)) continue;

            const newDist = distances[current] + graph[current][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                previous[neighbor] = current;
            }
        }
    }

    if (previous[endNode] === null && startNode !== endNode) {
        return []; 
    }

    const path = [];
    let node = endNode;
    while (node !== null) {
        path.unshift(node);
        node = previous[node];
    }

    return path.map(node => coordMap[node]).filter(Boolean);
}
