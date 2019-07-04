import { renderFigure } from './figure.js';
import { renderChaos } from './chaos.js';
import { getScreenSize } from '../canvas.js';

export function render(context, parameters) {
  // -> translating to desired origin
  context.fillStyle = '#081B33';
  let screen = getScreenSize();
  context.fillRect(-screen.width / 2, -screen.height / 2, screen.width, screen.height);
  
  parameters.vertices = parameters.verticesCoordinates();
  renderFigure(context, parameters);
  renderChaos(context, parameters);
}