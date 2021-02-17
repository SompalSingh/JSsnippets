const jokesEl = document.getElementById('jokes');
const btn = document.getElementById('joksbtn');
btn.addEventListener('click', newjokes);

newjokes()
function newjokes(){
    const config = {
        headers:{
            Accept:'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {  
        jokesEl.innerHTML = data.joke   
    });
}