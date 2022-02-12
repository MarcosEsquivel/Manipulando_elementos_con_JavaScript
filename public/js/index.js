const main = document.querySelector('main')
const h2 = document.querySelector('.subtitulo')
const a = document.querySelector('a')
const p = document.querySelectorAll('p')


main.style.display = "block"
h2.style.textTransform = "uppercase"
a.style.color = "#E51B3E"

for (let i = 0; i < p.length; i++) {
    if (i % 2 === 0) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')

    }
}

const name = window.prompt('Ingrese su nombre')

if (name) {
    h2.innerText += ' ' + name
} else {
    h2.innerText += ' Invitado'
}

const confirm = window.confirm("¿Desea colocar un fondo de pantalla?")

if (confirm) {
   document.querySelector('body').classList.add('fondo')
} 

