// создание box и добавление его в сцену
import * as THREE from "three";
import { scene } from "../createScene.js";

import stars1 from "../assets/stars1.jpg";
import stars2 from "../assets/stars2.png";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
export const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 1, 0);
box.castShadow = true;
scene.add(box);

const box1Geometry = new THREE.BoxGeometry(4, 4, 4);
const box1Material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: new THREE.TextureLoader().load(stars2),
});
export const box1 = new THREE.Mesh(box1Geometry, box1Material);
box1.position.set(0, 6, 4);
box1.castShadow = true;
scene.add(box1);

// создание plane и добавление его в сцену
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
export const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// создаем gridHelper и добавляем его в сцену
export const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);

// создаем sphereGeometry и добавляем его в сцену
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
});
export const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
scene.add(sphere);

sphere.position.set(4, 0, 0);
