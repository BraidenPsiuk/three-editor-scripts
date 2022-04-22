const clock = new THREE.Clock();
player.setCamera(this);

const mixer = new THREE.AnimationMixer(this.parent.parent);
const action = mixer.clipAction( this.parent.parent.animations[0] );
action.play();

function update( event ) {
	mixer.update( clock.getDelta() );
  // Even though we directly animated the camera's position in Blender, the glTF exporter OR importer (not sure which) actually seems to
  // create parent containers for all cameras in the scene, and these parent containers have their positions animated instead of the camera directly.
	console.log(this.parent.position.z);
}
