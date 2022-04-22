const clock = new THREE.Clock();
player.setCamera(this);

const mixer = new THREE.AnimationMixer(this.parent.parent);
const action = mixer.clipAction( this.parent.parent.animations[0] );
action.play();

function update( event ) {
	mixer.update( clock.getDelta() );
	//console.log(this.parent.parent.children[1].position.x);
	this.fov = this.parent.parent.children[1].position.x;
	this.updateProjectionMatrix();
	
	console.log({
		curFOV: this.fov,
		setFOV: this.parent.parent.children[1].position.x
	});
	//console.log(this.parent.parent.children[1].position.x);
	//console.log(this.parent.position.z); // Even though we animated the camera's position in Blender, the glTF exporter OR importer (not sure which) actually creates parent containers for all cameras in the scene, which then have their positions animated instead of the camera directly.
	//this.material.opacity = this.children[0].scale.x;
}
