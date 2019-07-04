import { parameters } from './app/chaos-game-parameters.js';
import { canvasSize, canvas } from './app/canvas.js';
import { polygonVertices } from './app/polygon-vertices.js';
import { render } from './app/render/render.js';
// import { collapseOptions } from './app/forms/collapse-forms.js';
import { formsRead } from './app/forms/forms-backend.js';

// import { forms } from './app/forms/polygon-parameters.js';

const context = canvas();
render(context, parameters);

window.addEventListener('resize', () => {
  parameters.scale = 0.45 * Math.min(canvasSize.width, canvasSize.height);
  render(context, parameters);
});

formsRead(context, parameters);