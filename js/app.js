
// Initial Setup

// Create Scene, Camera, Renderer
var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer()
var camera = new THREE.PerspectiveCamera( 75 , window.innerWidth / window.innerHeight, 0.1, 1000 )
  //                                      FOV, Aspect Ratio                          , Clipping Plane == how far/near do we want to render

renderer.setSize ( window.innerWidth, window.innerHeight )
  // what size we want our app to be rendered in

document.body.appendChild( renderer.domElement )
  // add the render element as a <canvas> element to the page




// Createing Geometry

var geometry = new THREE.BoxGeometry(1,1,1,1)
  /*
  BoxGeometry:
  Object that contains all the vertecies and faces of the cube
  */

var triangleGeometry = new THREE.Geometry()
    /*
    BoxGeometry:
    Object that contains all the vertecies and faces of the cube
    */
triangleGeometry.vertices.push( new THREE.Vector3(1,1,0))
triangleGeometry.vertices.push( new THREE.Vector3(3,1,0))
triangleGeometry.vertices.push( new THREE.Vector3(3,3,0))
triangleGeometry.faces.push(new THREE.Face3(0,1,2))

var material = new THREE.MeshBasicMaterial({color:0x00ff00})
  /*
  Materials:
  Object that contains all the vertecies and faces of the cube
  */

var triangleMaterial = new THREE.MeshBasicMaterial({
  color:0x00ff00,
  side:THREE.DoubleSide
})
var cube = new THREE.Mesh(geometry,material)
var triangleMesh = new THREE.Mesh(triangleGeometry,material)

  /*
  Mesh:
  Object that contains all the vertecies and faces of the cube
  */

scene.add(triangleMesh)
scene.add(cube)
  // places the object at (0,0,0)

camera.position.z = 5;
  // move the camera to  (0,0,5) so we can see the cube


cube.rotation.z = 0.75;
cube.rotation.x = 0.75;

var light = new THREE.Light( 0x404040 ); // soft white light
scene.add( light )


function render() {
  // set Interval
  requestAnimationFrame(render);
  cube.rotation.z += 0.01;
  cube.rotation.x += 0.01;
  triangleMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

render();
