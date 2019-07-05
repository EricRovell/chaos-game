import { renderFigure } from './figure.js';
import { renderChaos } from './chaos.js';
import { getScreenSize } from '../canvas.js';

export function render(context, parameters) {
  let screen = getScreenSize();

  // -> used to fill the canvas bg
  // context.fillStyle = '#081B33';
  // context.fillRect(-screen.width / 2, -screen.height / 2, screen.width, screen.height);
  
  parameters.vertices = parameters.verticesCoordinates();
  renderFigure(context, parameters);
  renderChaos(context, parameters);
}