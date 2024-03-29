import { randomInt, midPoint, stepCheck } from '../utility.js';
import { parameters } from '../parameters.js';

export function renderChaos(context, {vertices, points, position, dotSize, stepFactor, history, colours}) {
  
  context.fillStyle = colours.dots;
  let current = position;

  for (let point = 0; point < points; point++) {
    history[0] = randomInt(1, vertices.length);

    if (
      stepCheck('-1', parameters) &&
      stepCheck('-2', parameters) ) {

        current = midPoint(current, vertices[history[0] - 1], stepFactor);
        context.fillRect(current.x, current.y, dotSize, dotSize);

        history[-2] = history[-1];
        history[-1] = history[0];
    }    
  } 
}