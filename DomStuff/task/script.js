var aud = new Audio('./audio/50.mp3');
var aud1 = new Audio('./audio/52.mp3');
var aud2 = new Audio('./audio/57.mp3');

var h1 = document.querySelector('h1')

document.body.addEventListener('keydown', function(dets) {
   if(dets.code === 'KeyA'){
      aud.play();
   }
   if(dets.code === 'KeyV'){
      aud1.play();
   }
   if(dets.code === 'KeyP'){
      aud2.play();
   }
});
 