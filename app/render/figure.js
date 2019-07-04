export function renderFigure(context, {vertices, visibility, vertexSize}) {
  if (visibility.sides) {
    context.strokeStyle = visibility.sideColour;
    context.lineWidth = visibility.sideWidth;
    context.beginPath();
    context.moveTo(vertices[vertices.length - 1].x, vertices[vertices.length - 1].y)
    for (let vertice of vertices) {
      context.lineTo(vertice.x, vertice.y);
    }
    context.stroke();
  }

  if (visibility.vertices) {
    context.fillStyle = visibility.vertexColour;
    for (let vertice of vertices) {
      context.beginPath();
      context.arc(vertice.x, vertice.y, vertexSize, 0, 2 * Math.PI);
      context.fill();
    }
  }  
}

