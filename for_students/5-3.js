/**
 * 5-3.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as T from "../libs/THREE/build/three.module.js";
import { OrbitControls } from "../libs/THREE/examples/jsm/controls/OrbitControls.js";
import { onWindowOnload } from "../libs/helpers.js";

function lightex() {
  let renderer = new T.WebGLRenderer();
  renderer.setSize(400, 400);
  document.getElementById("div1").appendChild(renderer.domElement);

  let scene = new T.Scene();
  let camera = new T.PerspectiveCamera();
  camera.position.z = 10;
  camera.position.y = 5;
  camera.position.x = 5;
  camera.lookAt(0, 3, 0);

  // since we're animating, add OrbitControls
  let controls = new OrbitControls(camera, renderer.domElement);

  // Ambient light doesn't work since we're using physical materials
  // scene.add(new T.AmbientLight("white",0.2));

  //** STUDENT: Add some lights here */

  // make a ground plane
  let groundBox = new T.BoxGeometry(6, 0.1, 6);
  let groundMesh = new T.Mesh(
    groundBox,
    new T.MeshStandardMaterial({ color: 0x888888 })
  );
  // put the top of the box at the ground level (0)
  groundMesh.position.y = -0.05;
  scene.add(groundMesh);

  /**
   * Make some cubes in various places and orientations
   */

  let box = new T.BoxGeometry(1, 1, 1);
  let cube1 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
  cube1.position.set(2, 0.5, 2);
  scene.add(cube1);

  let cube2 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
  cube2.position.set(-2, 0.5, 2);
  cube2.rotateY(45);
  scene.add(cube2);

  let cube3 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
  cube3.position.y = 0.5;
  scene.add(cube3);

  let cube4 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
  cube4.position.set(2, Math.sqrt(2) / 2, -2);
  cube4.rotateX(45);
  scene.add(cube4);

  let cube5 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
  cube5.position.set(-2, 1, -2);
  scene.add(cube5);

  function draw() {
    cube5.rotateX(0.01);
    cube5.rotateY(0.01);
    renderer.render(scene, camera);
    window.requestAnimationFrame(draw);
  }
  draw();
}
onWindowOnload(lightex);
