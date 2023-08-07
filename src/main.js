import { createApp } from 'vue'
import App from './App.vue'
import { initializePokemonStore } from "@kuinox/pokedex.js";

initializePokemonStore("").then((pokeStore) => {
    createApp(App, {
        "pokeStore": pokeStore
    }).mount('#app')
});


let frameCount = 0; // total number of frames
let totalFrameTime = 0; // total frame time
let averageFrameTime; // average frame time
let droppedFrames = 0; // counter for dropped frames
let oldTimeStamp = performance.now(); // initial timestamp

function refreshLoop(timeStamp) {
  let actualFrameTime = timeStamp - oldTimeStamp; // actual frame time
  oldTimeStamp = timeStamp;

  frameCount++;
  totalFrameTime += actualFrameTime;
  averageFrameTime = totalFrameTime / frameCount; // calculate average frame time

  if (actualFrameTime > averageFrameTime * 1.2) { // if actual frame time is significantly longer than average
    droppedFrames += (actualFrameTime / averageFrameTime) - 1; // calculate number of dropped frames
  }
  window.requestAnimationFrame(refreshLoop);
}

window.requestAnimationFrame(refreshLoop);

setInterval(() => {
  document.getElementById("frameDropped").innerHTML = "Dropped Frames: " + droppedFrames.toFixed(0);
}, 1000);