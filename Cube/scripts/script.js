var renderer;
var scene;
var camera
var mesh;

function init()
{
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById("game").appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(0, 0, 1000);
	scene.add(camera);

	var texture = new THREE.TextureLoader().load("img/crate.png");
	var geometry = new THREE.BoxGeometry(300, 300, 300);
	var material = new THREE.MeshBasicMaterial({map: texture});
	material.needsUpdate = true;

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	animate();
}

function animate()
{
	requestAnimationFrame(animate);
	mesh.rotation.x += 0.0050;
	mesh.rotation.y += 0.0100;
	mesh.rotation.y += 0.0025;
	renderer.render(scene, camera);
}

window.addEventListener("load", function()
{
	init();
}, false);

window.addEventListener("resize", function()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
