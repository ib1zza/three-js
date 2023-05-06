import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import stars1 from "./assets/stars1.jpg";
import stars2 from "./assets/stars2.png";

export const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbitControls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

scene.fog = new THREE.Fog(0xffffff, 1, 100);

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
renderer.setClearColor(0xffffff, 1);
const texture = cubeTextureLoader.load([
  stars2,
  stars2,
  stars2,
  stars2,
  stars2,
  stars2,
]);

scene.background = texture;
// scene.background = textureLoader.load(stars1);

camera.position.set(2, 2, 5);
orbitControls.update();
