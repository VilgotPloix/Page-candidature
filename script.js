var rellax = new Rellax('.rellax');

const pres = document.getElementsByClassName('nomPres')[0];
const page = document.getElementsByClassName('page')[0];
const body = document.querySelector('body')

const audio = new Audio('./media/narkosis.mp3');

console.log(audio);

setTimeout(() => {

    pres.classList.add('invisible')

    setTimeout(() => {
        page.classList.remove('invisible')
        audio.play()
    }, 1000)

}, 1500)

audio.addEventListener('play', () => {
    setInterval(() => {
        body.classList.toggle('bg')
    }, 500);
})
