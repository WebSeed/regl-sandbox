import createREGL from 'regl'

import cube from './cube'
import teapot from 'teapot'
import bunny from 'bunny'
import createIcosphere from 'icosphere'

import angleNormals from 'angle-normals'
import normals from 'normals'
import createCamera from 'regl-camera'

import vert from './shader.vert.glsl'
import frag from './shader.frag.glsl'

const { vertexNormals } = normals

const regl = createREGL()
const camera = createCamera(regl, {
  distance: 3,
  damping: 0,
  center: [0, 0, 0],
  noScroll: true
})

const icosphere = createIcosphere(0)

const drawCube = regl({
  vert,
  frag,
  attributes: {
    position: cube.positions,
    normal: cube.normals
  },
  elements: cube.cells
})

// const drawBunny = regl({
//   vert,
//   frag,
//   attributes: {
//     position: bunny.positions,
//     normal: angleNormals(bunny.cells, bunny.positions)
//   },
//   elements: bunny.cells
// })

const drawTeapot = regl({
  vert,
  frag,
  attributes: {
    position: teapot.positions,
    normal: angleNormals(teapot.cells, teapot.positions)
  },
  elements: teapot.cells
})

// const drawIcosphere = regl({
//   vert,
//   frag,
//   attributes: {
//     position: icosphere.positions,
//     normal: vertexNormals(icosphere.cells, icosphere.positions)
//   },
//   elements: icosphere.cells
// })

regl.frame(() => {
  regl.clear({ color: [0, 0, 0, 1] })
  camera(() => {
    // drawCube()
    // drawIcosphere()
    // drawBunny()
    drawTeapot()
  })
})
