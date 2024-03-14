import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Rasengan from "./rasengan";

// Get the container element
const container = document.getElementById('container');

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0xffffff));

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement); // Append the renderer to the container

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zooming

// Set the camera position
camera.position.z = 5;

const rasengan = new Rasengan();

const button = document.getElementById("reset");
button.addEventListener('click', () => {
    rasengan.setRandomParametres();
});

scene.add(rasengan);

// Create a function to animate the cube
function animate() {
    requestAnimationFrame(animate);

    rasengan.update();

    // Update controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation
animate();

// Adjust the canvas size when the container is resized
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});
