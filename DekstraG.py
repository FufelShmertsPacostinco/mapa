import heapq


def dijkstra_with_path(graph, start):
    # Инициализация
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    previous_vertices = {vertex: None for vertex in graph}
    priority_queue = [(0, start)]

    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)

        # Если уже нашли более короткий путь - пропускаем
        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            # Если нашли более короткий путь
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous_vertices[neighbor] = current_vertex
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances, previous_vertices


def get_path(previous_vertices, start, end):
    path = []
    current_vertex = end

    # Восстанавливаем путь от конца к началу
    while current_vertex != start:
        path.append(current_vertex)
        current_vertex = previous_vertices[current_vertex]

    path.append(start)
    path.reverse()  # Переворачиваем, чтобы путь был от начала до конца
    return path


rooms = {
    "A" : [["B", "C"], [4, 1]],
    "B" : [["A", "C", "D"], [4, 2, 1]],
    "C" : [["A", "B", "D"], [1, 2, 5]],
    "D" : [["B", "C"], [1, 5]]
}
graph = {}

for key in rooms:
    graph[key] = {}

for key in rooms:
    for i in range(0, len(rooms[key][0])):
        graph[key][rooms[key][0][i]] = rooms[key][1][i]

#print(graph)
# Пример графа (взвешенного)


start_vertex = 'A'
end_vertex = 'D'

# Выполняем алгоритм
shortest_distances, previous_vertices = dijkstra_with_path(graph, start_vertex)
shortest_path = get_path(previous_vertices, start_vertex, end_vertex)

print(shortest_path)