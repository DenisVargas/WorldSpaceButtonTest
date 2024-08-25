AFRAME.registerComponent('cursoreventlistener', {
    init: function () {
        var el = this.el;
        el.addEventListener('mouseenter', ()=>{
            console.log("Mouse enter");
        });
        
        var world = document.querySelector('a-scene').object3D;  // THREE.Scene
        //Añadir un helper a la escena 3D para este objeto.
        const axesHelper = new THREE.AxesHelper( 1 );
        world.add( axesHelper );
        
        const gridhelper = new THREE.GridHelper(10, 10);
        world.add(gridhelper);
        
        var cameraElement = document.querySelector('a-camera').object3D;
        // console.log(cameraElement);
        var camera = cameraElement.children[0];
        // console.log(camera);
        
        //Añado una box geometry.
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( {color: 0x426296} );
        const cube = new THREE.Mesh( geometry, material );
        world.add( cube );
        
        const box = new THREE.BoxHelper( cube, 0xffff00 );
        world.add( box );
        
        //Añadir un control para la caja. Estaria bueno pero incluirlo es un dolor de huevo.
        // const boxController = new TransformControls(camera, this.el);
        // boxController.attach(box);
        // boxController.setMode('rotate');
        // world.add(boxController);
        
        // document.addEventListener('Editor_transfomModeChanged', (ed)=>{
        //     if(ed.transformMode === 'none'){
        //         // boxController.enabled = false;
        //         return;
        //     }
        
        //     // boxController.enabled = true;
        //     boxController.setMode(ed.transformMode);
        // });
        
        el.addEventListener('model-loaded', (e)=>{
            var gltfScene = el.object3D.children[0];
            gltfScene.traverse((object3D)=>{
                if(object3D.name == 'Button2'){
                    //Identificamos el objeto que nos interesa por el nombre.
                    console.log(object3D);                    
                    
                    const box = new THREE.BoxHelper( object3D, 0xffff00 );
                    world.add( box );
                }
                if(object3D.name == 'Button1'){
                    const box = new THREE.BoxHelper( object3D, 0xffff00 );
                    world.add( box );
                }
            });
            
            //Añadir una linea que represente el raycast.
            //Hacer que se calcule un raycast desde el forward del cubo.
        });
        
        console.log('button initialized');
    }
});

//TODO
//Añadir box helper a cada geometria por separado.
//Chequear si el componente funciona.