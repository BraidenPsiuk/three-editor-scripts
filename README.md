# three-editor-scripts
A collection of small, simple scripts for the [Three.js editor](https://threejs.org/editor)

There are two files for each script:
- [script].js: The actual script. You can copy-paste the contents into the Three.js Editor's script editor.
- [script].json: An example scene description file. You can simply drag-and-drop these into the Three.js Editor window, click the "play" button, and you'll get a basic example of what the script does.

Check out the list below to see what each script does and what you can attach it to.

-----

# List of Scripts

### gltf-material-opacity-animate.js
  - Attach to: THREE.Object3D
  - Description: Animate opacity (a property of THREE.Object3D.material) by using a child single vert's X translation property as a container to hold opacity animation data. In this example, opacity animation data is stored in '[child single vert].scale.x'.

### set-camera-on-play.js
  - Attach to: THREE.PerspectiveCamera
  - Description: Set the active camera when the "play" button is clicked by the user.
