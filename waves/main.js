import '/style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
// Container
const scene = new THREE.Scene();

// camera(FOV, Aspect Ratio, view start, view end)
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})

scene.background = new THREE.Color(0x000000)

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(150)

const controls = new OrbitControls(camera, renderer.domElement)

//#region Wave surface

let planeGeometry = new THREE.PlaneGeometry(500, 500, 150, 150)

let pointColor = new THREE.Color(0xffffff)

let pointMaterial = new THREE.PointsMaterial( {
  size: 0.1,
  color: pointColor,
  Image: NaN
} )

let plane = new THREE.Points(planeGeometry, pointMaterial)

plane.position.set(0, -100, -200)
plane.rotateX(3*Math.PI/2)
plane.rotateZ(Math.PI/2)
const count = planeGeometry.attributes.position.count
const clock = new THREE.Clock()

scene.add(plane)

let MAXHEIGHT = 500
//#endregion



//#region GUI
//DEBUGGER
const gui = new dat.GUI()

let controlValues = {
  scale: 10,
  frequency: 10,
  speed: 1,
  backgroundColor: 0x000000,
  pointClr: 0xffffff
}

let controlsGUI = gui.addFolder("Controls")

controlsGUI.add(controlValues, "frequency", 1, 50, 1).name("Frequency")
controlsGUI.add(controlValues, "scale", 5, 250, 5).name("Scale")
controlsGUI.add(controlValues, "speed", 1, 50, 0.1).name("Speed")

let rotationGUI = gui.addFolder("Rotation")

rotationGUI.add(plane.rotation, "x", 0, Math.PI * 2, 0.01).name('X Axis')
rotationGUI.add(plane.rotation, "y", 0, Math.PI * 2, 0.01).name('Y Axis')
rotationGUI.add(plane.rotation, "z", 0, Math.PI * 2, 0.01).name('Z Axis')

let colorsGUI = gui.addFolder("Colors")

colorsGUI.addColor(controlValues, "backgroundColor").listen().onChange((e) => {
  scene.background = new THREE.Color(e)
}).name("Background Color")

colorsGUI.addColor(controlValues, "pointClr").listen().onChange((e) => {
  plane.material.color = new THREE.Color(e)
}).name("Point Color")

//#endregion


// Animation Loop
function animate() {
  requestAnimationFrame(animate)

  let time = clock.getElapsedTime()
  time *= controlValues.speed

  for (let i = 0; i < count; i++) {
    let expression
    let x = i / count
    
    // Point Placement
    expression = Math.cos(time + x * controlValues.frequency)
    expression *= controlValues.scale;

    if (expression > MAXHEIGHT) {expression = MAXHEIGHT}

    plane.geometry.attributes.position.setZ(i, expression)
  }

  planeGeometry.computeVertexNormals()
  planeGeometry.attributes.position.needsUpdate = true
  

  controls.update()
  renderer.render(scene, camera)
}

animate()