// Create a function that finds the maximum range of a triangles third edge.

// (nextEdge(5, 4), 8)
// (nextEdge(8, 3), 10)
// (nextEdge(7, 9), 15)
// (nextEdge(10, 4), 13)
// (nextEdge(7, 2), 8)

function nextEdge(side1, side2) {
	return (side1+side2) -1;
};