const body = document.querySelector('.body')
const h1 = document.querySelector('h1')

const response = confirm('¿Desea modo oscuro?')

if (response) {
    body.style.backgroundColor = "#7f7f7f"
    
    body.classList.add('fondoMoviesList')
}



h1.innerHTML = "LISTADO DE PELÍCULAS"


h1.style.backgroundColor = "teal"
h1.style.color = "white"
h1.style.padding = "20px"



