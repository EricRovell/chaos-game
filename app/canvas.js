export const fullScreen = {
  width: window.innerWidth,
  height: window.innerHeight
}

export const getScreenSize = () => {
  return {
    width: document.querySelector('.canvas-window').offsetWidth,
    height: document.querySelector('.canvas-window').offsetHeight
  }
};

export const resize = (context, canvas, parameters) => {
  // get dimensions
  const container = document.querySelector('.canvas-window');
  const {offsetWidth: width, offsetHeight: height} = container;
  // change canvas's size
  [canvas.width, canvas.height] = [width, height];
  context.translate(width / 2, height / 2);
  // correct the render's scale
  parameters.scale.initial = parameters.scale.fit * Math.min(width, height);
};

export function makeCanvas() {
  const container = document.querySelector('.canvas-window');
  const {offsetWidth: width, offsetHeight: height} = container;
  // const {innerWidth: width, innerHeight: height} = window;

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  [canvas.width, canvas.height] = [width, height];
  context.translate(width / 2, height / 2);

  return {
    canvas: canvas,
    context: context
  };
}