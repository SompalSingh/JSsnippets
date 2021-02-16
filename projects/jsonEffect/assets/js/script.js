
/* Play an animation on each click and hover */
  let animationIcon = document.querySelector('.bodymovinanim');
  let createAnimation = bodymovin.loadAnimation({
          container: animationIcon,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: 'assets/data/checkbox.json'
  });

    // animationIcon.addEventListener('mouseenter', function() {
    //   createAnimation.playSegments([0,60], true);
    //   playFile('../assets/mp3/sound.mp3');
    // });

    animationIcon.addEventListener('click', function() {
      //createAnimation.setDirection(-1);
      const check = document.querySelector('.check');
      if(check.checked){
        createAnimation.playSegments([0,60], true);
        playFile('assets/mp3/hello.mp3')
      }else{
        createAnimation.playSegments([60,0], true);
        playFile('assets/mp3/bye.mp3')
      }
    });


/*** Start Mp3 File function  ****/
const context = new window.AudioContext();
function playFile(filepath) {
  // see https://jakearchibald.com/2016/sounds-fun/
  fetch(filepath)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      const soundSource = context.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(context.destination);
      soundSource.start();
    });
}
/*** End Mp3 File function  ****/
// function stopMusic();{
//   let sounds = document.querySelector('.')
// }
    
    







