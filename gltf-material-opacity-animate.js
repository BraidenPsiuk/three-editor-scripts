const clock = new THREE.Clock();
this.material.transparent = true;

const mixer = new THREE.AnimationMixer(this.parent);
const action = mixer.clipAction( this.parent.animations[0] );
action.play();

function update( event ) {
	mixer.update( clock.getDelta() );
	this.material.opacity = this.children[0].scale.x;
}
