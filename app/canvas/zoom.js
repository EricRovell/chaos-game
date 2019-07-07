export const canvasWheelZoom = () => {
  const scale = {
    min: 0.5,
    present: 1,
    max: 2
  }
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('wheel', event => {
    event.preventDefault();
    scale.present += event.deltaY * (-0.0008);
    // restrict scale
    scale.present = Math.min(Math.max(scale.min, scale.present), scale.max);
    // apply scale transformation
    canvas.style.transform = `scale(${scale.present})`;
  });  
};