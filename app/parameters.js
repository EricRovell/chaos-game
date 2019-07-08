import { getScreenSize } from './canvas.js';

let screen = getScreenSize();

const parameters = {

  // canvas window
  scale: {
    // fit
    fit: 0.47,
    initial: 0.47 * Math.min(screen.width, screen.height),
    // zoom
    min: 0.25,
    present: 1,
    max: 2
  },  

  // polygon
  origin: { 
    x: screen.width / 2,
    y: screen.height / 2
  },                                 // origin position
  vertices: null,
  theta: -Math.PI /2,                // rotation  
  polygon: 6,                        // type
  visibility : {
    vertices: true,
    sides: true,
    sideWidth: 3,
  },
  vertexSize: 7,                    // --self-explanatory--
  
  // rendering points
  position: { x: 0, y: 0 },   // starting position
  pointSize: 1,               // size of the point
  paintSpeed: 25,             // how many points are rendered at once
  points: 10000,               // how much points to render 
  dotSize: 1,

  // colours
  colours: {
    vertices: "white",
    sides: "white",
    dots: "white",
    /* dots: {
      default: 'rgba(255, 0, 255, 200)',
      1: 'rgba(100, 200, 255, 150)',
    } */
  },

  // chaos parameters
  stepFactor: 0.5,            // step distance factor towards a vertice
  restricted: {
    '-1': true,
    '-2': true
  },            // step allowance mode
  steps: {                   // how many vertices ahead can be OR can't be the next move
    '-1': [],               //    -> previous vertex
    '-2': []                //    -> penultimate vertex
  },

  // storing history of states
  history: {
    '0': 1,                  // -> present vertex
    '-1': 1,                 // -> previous vertex
    '-2': 1                  // -> penultimate vertex
  },

  // re/calculate polygon's coordinates as needed
  verticesCoordinates: function() {
    const vertices = new Array;
    for (let i = 0; i < this.polygon; i++) {
      vertices.push({
        x: this.scale.initial * Math.cos(this.theta + 2 * Math.PI * i / this.polygon),
        y: this.scale.initial * Math.sin(this.theta + 2 * Math.PI * i / this.polygon),
      });
    }
    return vertices;
  },
}

parameters.vertices = parameters.verticesCoordinates();

export { parameters };