const BTN_INICIAR = document.getElementById('btnIniciar');
const INPUT_TEXTO = document.getElementById('inputTexto');
const TEXTO_ADIVINAR = document.getElementById('textOculto');
const AHORCADO_IMG = document.getElementById('ahorcadoImagen');
const GANASTE = document.getElementById('mensajeGanador');
const textos = ['PERRO', 'GATO', 'NIÑOS', 'AGUA', 'CANILLA', 'COMPUTADORA', 'ARBOL', 'REGLA', 'PROGRAMADOR', 'PROGRAMACION', 'ESTUDIOSO'];
let textoConvertido = '';
let textosIndice = 0;
let contador = 0;
let palabra = '';

// Añadimos un eventListener al input para que lea los caracteres ingresados y comparamos
INPUT_TEXTO.addEventListener('keyup', () => {
    let aux = '';
    let correcto = false;
    for (i = 0; i < palabra.length; i++) {
        if (INPUT_TEXTO.value.toUpperCase() == palabra[i]) {
            aux += palabra[i];
            correcto = true;
        }
        else {
            aux += textoConvertido[i];
        }
    }
    if (!correcto) {
        contador++;
        cambiarMunheco(contador);
        if (contador === 6) {
            INPUT_TEXTO.disabled = true;
            GANASTE.innerHTML = `¡PERDISTE!<br/> La palabra era ${palabra}`
        }
    }
    INPUT_TEXTO.value = '';
    textoConvertido = aux;
    TEXTO_ADIVINAR.textContent = `${textoConvertido}`;
    if (textoConvertido == palabra) {
        INPUT_TEXTO.disabled = true;
        GANASTE.innerHTML = '¡FELICIDADES, GANASTE!'
    }
});

// Al boton iniciar le agregamos un EventListener que al hacer click selecciona texto aleatorio y comienza el juego
document.getElementById("btnIniciar").addEventListener("click", () => {
    textoAleatorio();
    convertirTexto(palabra);
    BTN_INICIAR.innerHTML = "SIGUIENTE";
    TEXTO_ADIVINAR.classList.remove("textoAnimado");
});

// Funcion que convierte el texto seleccionado a Guiones para que el usuario no lo vea
function convertirTexto(txt) {
    textoConvertido = '';
    for (i = 0; i < txt.length; i++) {
        textoConvertido += '_';
    }
    TEXTO_ADIVINAR.innerHTML = `${textoConvertido}`;
    INPUT_TEXTO.focus();
}

// Funcion que selecciona un texto del array aleatoriamente
function textoAleatorio() {
    textosIndice = Math.floor(Math.random() * textos.length);
    palabra = textos[textosIndice];
    INPUT_TEXTO.disabled = false;
    contador = 0;
    cambiarMunheco(0);
    GANASTE.innerHTML = ''
}

// Funcion que actualiza el muñeco del ahorcado
function cambiarMunheco(n1) {
    AHORCADO_IMG.src = `./res/img/img-${n1}.png`;
}