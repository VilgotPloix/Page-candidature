var rellax = new Rellax('.rellax');

const pres = document.getElementsByClassName('nomPres')[0];
const page = document.getElementsByClassName('page')[0];


setTimeout(() => {

    pres.classList.add('invisible')

    setTimeout(() => {
        page.classList.remove('invisible')
    }, 1000)

}, 1500)