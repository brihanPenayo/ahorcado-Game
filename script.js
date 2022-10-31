const BTN_INICIAR = document.getElementById('btnIniciar');
const INPUT_TEXTO = document.getElementById('inputTexto');
const TEXTO_ADIVINAR = document.getElementById('textOculto');
const textos = ['PERRO', 'GATO', 'LUZ', 'AGUA', 'CAMILA', 'PEPITO', 'KURO', 'GALA', 'FRANCIS'];
let textoConvertido = '';
let textosIndice = 0;
let fallas = 0;
let palabra='';
INPUT_TEXTO.addEventListener('keyup', () => {
    let aux = '';
    let correcto = false;
    comprobarIntentos(fallas);
    for (i = 0; i < palabra.length; i++) {
        if (INPUT_TEXTO.value.toUpperCase() === palabra[i]) {
            aux += palabra[i];
            correcto = true;
        }
        else {
            aux += textoConvertido[i];
        }
    }
    if (!correcto) {
        fallas++;
    }
    INPUT_TEXTO.value = '';
    textoConvertido = aux;
    TEXTO_ADIVINAR.innerHTML = `${textoConvertido}`;
    console.log(fallas);
});

function comprobarIntentos(intentos) {
    if (intentos >= 0) {
        TEXTO_ADIVINAR.innerHTML = "<span>Jess</span>";
    }
}

document.getElementById("btnIniciar").addEventListener("click", () => {
    textoAleatorio();
    convertirTexto(palabra);
    INPUT_TEXTO.focus();
});

function convertirTexto(txt) {
    textoConvertido = '';
    for (i = 0; i < txt.length; i++) {
        textoConvertido += '_';
    }
    TEXTO_ADIVINAR.innerHTML = `${textoConvertido}`;
}

function textoAleatorio() {
    textosIndice= Math.floor(Math.random()*textos.length);
    palabra=textos[textosIndice];
    alert(palabra);
}
    
