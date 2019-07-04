export function polygonVertices({polygon, scale, theta}) {
  /**
   * @param {Integer} polygon The number of polygon's sides
   * @param {Number}  scale Size of the polygon
   * @param {Number}  theta Rotating the polygon around it's center
   */
  const vertices = new Array;
  for (let i = 0; i < polygon; i++) {
    vertices.push({
      x: scale * Math.cos(theta + 2 * Math.PI * i / polygon),
      y: scale * Math.sin(theta + 2 * Math.PI * i / polygon),
    });
  }
  return vertices;
}