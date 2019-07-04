export const fullScreen = {
  width: window.innerWidth,
  height: window.innerHeight
}

export const canvasSize = {
  width: document.querySelector('.canvas-window').offsetWidth,
  height: document.querySelector('.canvas-window').offsetHeight
}

export function canvas() {
  const container = document.querySelector('.canvas-window');
  const {offsetWidth: width, offsetHeight: height} = container;
  // const {innerWidth: width, innerHeight: height} = window;

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  [canvas.width, canvas.height] = [width, height];
  context.translate(width / 2, height / 2);

  return context;
}