const clock = new THREE.Clock();
const opacityFadeInOut = this.parent.animations[0];

const mixer = new THREE.AnimationMixer(this.parent);
const action = mixer.clipAction( opacityFadeInOut );
action.play();

console.log(this.transparent);
console.log(this.opacity);
console.log(this);

function update( event ) {
	mixer.update( clock.getDelta() );
	this.material.opacity = this.children[0].scale.x;
}
