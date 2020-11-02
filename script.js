const keys = document.querySelectorAll('.box');

keys.forEach(key =>{
    key.addEventListener('click',() => playDrum(key))
})

function playDrum(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
    audio.addEventListener('ended', ()=>{
        key.classList.remove('active');
    })
}