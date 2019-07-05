import { render } from '../render/render.js';
import { getScreenSize } from '../canvas.js';

export const formsRead = (context, parameters) => {
  const forms = {
    polygon: document.getElementById('polygon'),
    dots: document.getElementById('dots'),
    visibility: {
      vertices: document.getElementById('visibility-vertices'),
      sides: document.getElementById('visibility-sides')
    },
    theta: document.getElementById('scale-option'),
    fit: document.getElementById('fit-option'),

    restricted: {
      '-1': document.querySelectorAll('.restricted-mode')[0],
      '-2': document.querySelectorAll('.restricted-mode')[1]
    },
    steps: {
      '-1': document.getElementById('previous-vertices'),
      '-2': document.getElementById('penultimate-vertices'),
    },
  };
    

  forms.polygon.addEventListener('input', () => {
    parameters.polygon = parseInt(polygon.value, 10);
    render(context, parameters);
  });

  forms.dots.addEventListener('input', () => {
    parameters.points = parseInt(dots.value, 10);
    render(context, parameters);
  });

  forms.visibility.vertices.addEventListener('click', () => {
    if (forms.visibility.vertices.checked) {
      parameters.visibility.vertices = true;
    } else {
      parameters.visibility.vertices = false;
    }
    render(context, parameters);
  });

  forms.visibility.sides.addEventListener('click', () => {
    if (forms.visibility.sides.checked) {
      parameters.visibility.sides = true;
    } else {
      parameters.visibility.sides = false;
    }
    render(context, parameters);
  });

  forms.theta.addEventListener('input', () => {
    parameters.theta = Math.PI / 180 * forms.theta.value;
    render(context, parameters);
  })

  forms.fit.addEventListener('click', () => {
    const { width, height } = getScreenSize();
    parameters.scale = parameters.scaleFactor * Math.min(width, height);
    render(context, parameters); 
  });

  for (let restrict in forms.restricted) {
    forms.restricted[restrict].addEventListener('input', () => {
      if (forms.restricted[restrict].checked) {
        parameters.restricted[restrict] = true;
      } else {
        parameters.restricted[restrict] = false;
      }
      render(context, parameters);
    });    
  }

  for (let step in forms.steps) {
    forms.steps[step].addEventListener('input', () => {
      let vertices = forms.steps[step].value;
      vertices = vertices.trim().split(',').map(Number);
      parameters.steps[step] = vertices;
      render(context, parameters);
    });
  }
}