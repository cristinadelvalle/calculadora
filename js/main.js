// calculadora
const pantalla = document.querySelector('.pantalla')
const botones = document.querySelectorAll('.btn')

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent
        //   para que c tenga la funcion de borrar y retornar 0
        if (boton.id === 'c') {
            pantalla.textContent = '0'
            return
        }
        // borrar sin que nos ap arezca la flechita en la pantalla (que nos quite el ultimo numero de el [])
        if (boton.id === 'borrar') {
            if(pantalla.textContent.length === 1 || pantalla.textContent === 'Error'){
                pantalla.textContent = '0'
            } else{
                 pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }

        // que nos resuelva las operaciones que hacemos(eval: funcion que evalua un conjunto de string que tenga operaciones matematicas)
        if(boton.id === 'igual'){
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = 'Error'
            }
            return
        }

       //funciones de la pantalla principal: textContent 
        if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado
        }
    })
});






































