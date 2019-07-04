import { parameters } from './chaos-game-parameters.js';

export const midPoint = (position, vertex, stepFactor) => {
  return {
    x: (position.x + vertex.x) * stepFactor,
    y: (position.y + vertex.y) * stepFactor
  }
};

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const stepCheck = (vertices, steps, previous, {history}) => {
  if (!steps.length) { return true; }
  if (parameters.restricted) {
    return steps.some(step => {
      if (history[0] > previous) {
        return (history[0] - previous != step)
      } else {
        return (vertices.length - previous + history[0] != step);
      }
    }); 
  } else {
    return steps.some(step => {
      if (history[0] > previous) {
        return (history[0] - previous == step)
      } else {
        return (vertices.length - previous + history[0] == step);
      }
    }); 
  }     
};
