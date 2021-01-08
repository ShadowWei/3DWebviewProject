class script {

    constructor() {
            let scene;
            let camera;
            let renderer;

            this.init();
        }
        //python -m http.server 8080

    init() {
        scene = new THREE.scene();
        scene.background = new THREE.Color(0xdddddd);

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

        light = new THREE.AmbientLight(0x404040, 100);

        scene.add(light);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement);


        let loader = new THREE.GLTFLoader();
        loader.load('scene.gltf', function(gltf) {
            scene.add(gltf.scene);
            renderer.render(scene, camera);
        });
    }
}