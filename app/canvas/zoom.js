import { render } from "../render/render.js";
import { getScreenSize } from '../canvas.js';

export const canvasWheelZoom = (context, parameters) => {
  const { scale } = parameters;
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('wheel', event => {
    let screen = getScreenSize();
    event.preventDefault();
    scale.present += event.deltaY * (-0.0008);
    // restrict scale
    scale.present = Math.min(Math.max(scale.min, scale.present), scale.max);
    // apply scale transformation
    
    context.setTransform(scale.present, 0, 0, scale.present, screen.width / 2, screen.height / 2);
    render(context, parameters)
  });  
};