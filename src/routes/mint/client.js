import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let object;
let controls;

const loader = new GLTFLoader();

loader.load("/mint.glb", (gltf) => {
	object = gltf.scene;
	scene.add(object);
}, (xhr) => {
	console.log((xhr.loaded / xhr.total * 100) + "% loaded");
}, (err) => {
	console.error(err);
});

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.querySelector("#mint3d").appendChild(renderer.domElement);

camera.position.z = 25;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();