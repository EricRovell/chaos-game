export const forms = {
  polygon: document.getElementById('polygon'),
  dots: document.getElementById('dots'),
  visibility: {
    vertices: document.getElementById('visibility-vertices'),
    sides: document.getElementById('visibility-sides')
  },
  theta: document.getElementById('scale-option'),
  fit: document.getElementById('fit-option'),

  // chaos options

  restricted: {
    '-1': document.querySelectorAll('.restricted-mode')[0],
    '-2': document.querySelectorAll('.restricted-mode')[1]
  },
  steps: {
    '-1': document.getElementById('previous-vertices'),
    '-2': document.getElementById('penultimate-vertices'),
  },

  // colours options

  colours: {
    vertices: document.querySelectorAll('.colour-input')[0],
    sides: document.querySelectorAll('.colour-input')[1],
    dots: document.querySelectorAll('.colour-input')[2]
  },

};