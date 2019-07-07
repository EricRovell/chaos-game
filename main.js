import { parameters } from './app/parameters.js';
import { makeCanvas, resize } from './app/canvas.js';
import { render } from './app/render/render.js';
import { formsRead } from './app/forms/forms-backend.js';
import { canvasWheelZoom } from './app/canvas/zoom.js';

const { canvas, context } = makeCanvas();
render(context, parameters);

canvasWheelZoom();

window.addEventListener('resize', () => {
  resize(context, canvas, parameters);
  render(context, parameters);
});

formsRead(context, parameters);