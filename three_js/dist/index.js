import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js"
import { OrbitControls } from 'https://unpkg.com/three-orbit-controls@82.1.0/index.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.lookAt(cube.position);
camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

function render_loop() {
    requestAnimationFrame(render_loop);

    renderer.render(scene, camera);
}

render_loop();