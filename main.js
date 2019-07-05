import { parameters } from './app/parameters.js';
import { makeCanvas, resize } from './app/canvas.js';
import { render } from './app/render/render.js';
import { formsRead } from './app/forms/forms-backend.js';

const { canvas, context } = makeCanvas();
render(context, parameters);

window.addEventListener('resize', () => {
  resize(context, canvas, parameters);
  render(context, parameters);
});

formsRead(context, parameters);