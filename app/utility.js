import { parameters } from './parameters.js';

export const midPoint = (position, vertex, stepFactor) => {
  return {
    x: (position.x + vertex.x) * stepFactor,
    y: (position.y + vertex.y) * stepFactor
  }
};

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const stepCheck = (backward, {vertices, steps, history, restricted}) => {
  if (!steps[backward].length) { return true; }

  /* const check = () => {
    return steps[backward].some(step => {
      if (history[0] > previous) {
        return (history[0] - previous != step)
      } else {
        return (vertices.length - previous + history[0] != step);
      }
    }); 
  }; */

  const previous = history[backward]
  if (restricted[backward]) {
    return steps[backward].some(step => {
      if (history[0] > previous) {
        return (history[0] - previous != step)
      } else {
        return (vertices.length - previous + history[0] != step);
      }
    }); 
  } else {
    return steps[backward].some(step => {
      if (history[0] > previous) {
        return (history[0] - previous == step)
      } else {
        return (vertices.length - previous + history[0] == step);
      }
    }); 
  }     
};
