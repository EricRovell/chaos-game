import { renderFigure } from './figure.js';
import { renderChaos } from './chaos.js';
import { getScreenSize } from '../canvas.js';

export function render(context, parameters) {
  let screen = getScreenSize();
  // clear
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.restore();
  // context.clearRect(-screen.width / 2, -screen.height / 2, screen.width, screen.height);
  parameters.vertices = parameters.verticesCoordinates();
  renderFigure(context, parameters);
  renderChaos(context, parameters);
}