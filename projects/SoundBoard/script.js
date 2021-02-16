const sounds = ['aabaad', 'dua', 'naach', 'sona'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', function(){
        stopSong();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSong(){
    sounds.forEach(sound => {
        const stop = document.getElementById(sound);
        stop.pause();
        stop.currentTime = 0;
    })
}