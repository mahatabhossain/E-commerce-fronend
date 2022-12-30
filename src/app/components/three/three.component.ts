import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Camera } from 'three';
import { ReadtextService } from 'src/app/services/readtext.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  scence = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
  renderer = new THREE.WebGLRenderer;
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  cube = new THREE.Mesh(this.geometry,this.material);
  
  renderer2 = this.renderer.setSize(window.innerWidth, window.innerHeight);
  element = document.body.appendChild(this.renderer.domElement);

  constructor(public read: ReadtextService) { }

  ngOnInit(): void {
  }


animate(){
console.log('animate function called')


  // this.read.readTest()
  
  this.scence.add(this.cube);
  this.camera.position.z = 5;

requestAnimationFrame(this.animate);

this.cube.rotation.x += 0.01;
this.cube.rotation.y += 0.01;

this.renderer.render(this.scence, this.camera);

//   (function(){
//     console.log();
//     console.log('testing');
// })();

}

}
