import { polygonVertices } from '../polygon-vertices.js';
import { renderFigure } from './figure.js';
import { renderChaos } from './chaos.js';
import { canvasSize as screen} from '../canvas.js';

export function render(context, parameters) {
  // -> translating to desired origin
  context.fillStyle = '#081B33';
  context.fillRect(-screen.width / 2, -screen.height / 2, screen.width, screen.height);
  
  let vertices = polygonVertices(parameters);
  renderFigure(context, vertices, parameters);
  renderChaos(context, vertices, parameters);
}