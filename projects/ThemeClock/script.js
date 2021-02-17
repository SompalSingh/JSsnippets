const hourEl = document.querySelector('.hours')
const minutEl = document.querySelector('.minutes')
const secondEl = document.querySelector('.seconds')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// toggle.addEventListener('click',(e)=>{
//     const doc = document.querySelector('html')
//     doc.classList.toggle('dark')
// })
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setDate(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hours = hour % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hour >=12 ? 'PM' : 'AM'
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0,11,0,360)}deg)`
    minutEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0,59,0,360)}deg)`

    timeEl.innerHTML = `${hours}: ${minute < 10 ? `0${minute}` : minute} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  } 
setDate()
setInterval(setDate, 1000)