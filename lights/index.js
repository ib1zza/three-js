import * as THREE from "three";
import { scene } from "../createScene.js";

export const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 50, 10);
directionalLight.castShadow = true;

export const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight
);

export const directionalLightShadowHelper = new THREE.CameraHelper(
  directionalLight.shadow.camera
);

export const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(10, 50, 10);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 16;
export const spotLightHelper = new THREE.SpotLightHelper(spotLight);

scene.add(spotLightHelper);
scene.add(spotLight);
scene.add(directionalLight);
scene.add(directionalLightHelper);
scene.add(directionalLightShadowHelper);
