import { getScreenSize } from './canvas.js';

let screen = getScreenSize();

const parameters = {

  verticesCoordinates: function() {
    const vertices = new Array;
    for (let i = 0; i < this.polygon; i++) {
      vertices.push({
        x: this.scale * Math.cos(this.theta + 2 * Math.PI * i / this.polygon),
        y: this.scale * Math.sin(this.theta + 2 * Math.PI * i / this.polygon),
      });
    }
    return vertices;
  },

  // polygon
  origin: { 
    x: screen.width / 2,
    y: screen.height / 2
  },                                 // origin position
  vertices: null,
  theta: -Math.PI /2,                // rotation  
  polygon: 5,                        // type
  visibility : {
    vertices: true,
    vertexColour: "white",
    sides: true,
    sideColour: "white",
    sideWidth: 3,
  },
  vertexSize: 7,                    // --self-explanatory--
  scaleFactor: 0.47,
  scale: 0.47 * Math.min(screen.width, screen.height),    // scaling factor

  // rendering points
  position: { x: 0, y: 0 },   // starting position
  pointSize: 1,               // size of the point
  paintSpeed: 25,             // how many points are rendered at once
  points: 30000,               // how much points to render 
  dotSize: 1,
  dotColours: {               // colors specified towards each polygon's vertice
    default: 'rgba(255, 0, 255, 200)',
    1: 'rgba(100, 200, 255, 150)',
  },

  // chaos parameters
  stepFactor: 0.5,            // step distance factor towards a vertice
  restricted: true,            // step allowance mode
  steps: {                   // how many vertices ahead can be OR can't be the next move
    '-1': [1, 4, 5],               //    -> previous vertex
    '-2': []                //    -> penultimate vertex
  },

  // storing history of states
  history: {
    '0': 1,                  // -> present vertex
    '-1': 1,                 // -> previous vertex
    '-2': 1                  // -> penultimate vertex
  },
}

parameters.vertices = parameters.verticesCoordinates();

export { parameters };