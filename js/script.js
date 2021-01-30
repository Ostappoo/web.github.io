var scene, camera, renderer;
     
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight);
        camera.rotation.set(0,0,0);
     
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var controls = new THREE.OrbitControls(camera,renderer.domElement);
        controls.minDistance = 1
        controls.maxDistance = 1000
        controls.update();

        var abint = new THREE.AmbientLight(0x111111)
        scene.add(abint)

        const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
		    	dirLight.position.set(1,10,100);
			    scene.add( dirLight );


        const loader = new THREE.GLTFLoader();
      
         loader.load( 'adamHead.gltf', function ( gltf ){
         gltf.scene.scale.set(0.1,0.1,0.1)
         gltf.scene.rotation.set(2,0,3.1)
         scene.add(gltf.scene);
         })

         const AButton = document.getElementById( 'AButton' );
         AButton.addEventListener( 'click', function () {
 
          dirLight.color.setHex( 0xff0000 );
 
         } );

         const BButton = document.getElementById( 'BButton' );
         BButton.addEventListener( 'click', function () {
 
          dirLight.color.setHex( 0xffffff );
 
         } );

      function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene,camera);

       // stats.update();
        
      }
      animate()
     