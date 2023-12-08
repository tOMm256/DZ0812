const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const accordion = document.getElementById('accordion')

button1.addEventListener('click', function () {
    console.log('click')
    accordion.classList.toggle('visible')
})

button2.addEventListener('click', function () {
    console.log('click')
    accordion.classList.remove('visible')
})

button3.addEventListener('click', function () {
    console.log('click')
    accordion.classList.remove('visible')
})