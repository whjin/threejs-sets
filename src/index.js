import * as THREE from "three";

window.onload = function () {
    init();
};

function init () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 400 / 300, 0.1, 1000);

    const renderer = new THREE.WebGL1Renderer();
    renderer.setClearColor(new THREE.Color('#eee'));
    renderer.setSize(400, 300);
    const axes = new THREE.AxesHelper(20);
    scene.add(axes);

    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: '#ccc' });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMeterial = new THREE.MeshBasicMaterial({ color: '#f00', wireframe: true });
    const cube = new THREE.Mesh(cubeGeometry, cubeMeterial);
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    scene.add(cube);

    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#77f', wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    document.getElementById("threeContainer").appendChild(renderer.domElement);
    renderer.render(scene, camera);
}