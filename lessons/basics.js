import * as THREE from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { box, sphere } from "../geometry/index.js";
import { camera, scene, renderer } from "../createScene.js";
import {
  ambientLight,
  directionalLightHelper,
  directionalLightShadowHelper,
  spotLightHelper,
  spotLight,
} from "../lights/index.js";

const tableUrl = new URL("../assets/wooden_table.glb", import.meta.url);

const assetLoader = new GLTFLoader();

assetLoader.load(
  tableUrl.href,
  (gltf) => {
    const model = gltf.scene;
    model.castShadow = true;
    scene.add(model);
    model.position.set(3, 1, 3);
  },
  undefined,
  (error) => {
    console.error(error);
  }
);
const gui = new dat.GUI();
const options = {
  sphereColor: "#ffea00",
  wireframe: false,
  speed: 0.01,
  ambientIntensity: 0.1,
  angle: 0.2,
  penumbra: 0,
  intensity: 1,
};

gui.addColor(options, "sphereColor").onChange((e) => {
  sphere.material.color.set(e);
});

gui.add(options, "wireframe").onChange((e) => {
  sphere.material.wireframe = e;
});

gui.add(options, "speed", 0, 0.1);
gui.add(options, "ambientIntensity", 0, 1);

gui.add(options, "angle", 0, 1);
gui.add(options, "penumbra", 0, 1);
gui.add(options, "intensity", 0, 1);

let step = 0;

const mousePosition = new THREE.Vector2();
window.addEventListener("mousemove", (e) => {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

const raycaster = new THREE.Raycaster();

const sphereId = sphere.id;
function animate() {
  requestAnimationFrame(animate);
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  box.rotation.z += 0.01;

  step += options.speed;
  spotLight.angle = options.angle;
  spotLight.penumbra = options.penumbra;
  spotLight.intensity = options.intensity;
  ambientLight.intensity = options.ambientIntensity;
  spotLightHelper.update();

  raycaster.setFromCamera(mousePosition, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  intersects.forEach((intersect) => {
    if (intersect.object.id === sphereId) {
      intersect.object.material.color.set(0xffff00);
    }
  });
  console.log(intersects);
  sphere.position.y = 10 * Math.abs(Math.sin(step));
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
