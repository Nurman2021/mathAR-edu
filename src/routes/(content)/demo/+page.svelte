<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	let scene, camera, renderer, controls;
	let scaleBar,
		ball,
		cubes = [];
	let leftWeight = 0;
	const ballWeight = 10; // Ball's fixed weight
	const cubeWeight = 3; // Weight of each cube

	// Function to initialize the Three.js scene
	function init() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xf0f0f0);

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 5, 15);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		controls = new OrbitControls(camera, renderer.domElement);

		// Scale bar
		const barGeometry = new THREE.BoxGeometry(10, 0.5, 0.5);
		const barMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
		scaleBar = new THREE.Mesh(barGeometry, barMaterial);
		scaleBar.position.y = 1;
		scene.add(scaleBar);

		// Pivot
		const pivotGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1);
		const pivotMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
		const pivot = new THREE.Mesh(pivotGeometry, pivotMaterial);
		pivot.position.y = 0.5;
		scene.add(pivot);

		// Ball on the right side of the scale
		const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
		const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		ball = new THREE.Mesh(ballGeometry, ballMaterial);
		ball.position.set(5, 1.25, 0);
		scene.add(ball);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 10, 7.5);
		scene.add(directionalLight);

		// Event listener for adding cubes
		window.addEventListener('click', addCube);

		animate();
	}

	// Function to add a cube on the left side
	function addCube() {
		const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
		const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

		cube.position.set(-5, 1 + cubes.length, 0); // Stack cubes
		scene.add(cube);
		cubes.push(cube);

		leftWeight += cubeWeight; // Increase left side weight
		updateScale(); // Update scale position
	}

	// Update scale based on weight difference
	function updateScale() {
		const difference = leftWeight - ballWeight;
		scaleBar.rotation.z = THREE.MathUtils.degToRad(difference * 2); // More difference, more tilt
	}

	// Animation loop
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}

	// Use onMount to initialize Three.js scene after component mounts
	onMount(() => {
		init();
		return () => {
			// Cleanup event listener and renderer
			window.removeEventListener('click', addCube);
			renderer && renderer.dispose();
		};
	});
</script>

<!-- No HTML is needed; everything renders through Three.js -->

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
	}
</style>
