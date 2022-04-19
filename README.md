# three-editor-scripts
A collection of small, simple scripts for the [Three.js editor](https://threejs.org/editor)
Read this README to see what each script does and what it attaches to.

- gltf-material-opacity-animate.js
  - Attach to: THREE.Object3D
  - Description: Animate opacity (a property of THREE.Object3D.material) by using a single vert child's X translation property as a container to hold opacity animation data. In this example, opacity animation data is stored in '[vert].scale.x'.
