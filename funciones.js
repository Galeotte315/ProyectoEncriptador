
//primer textarea
window.onload = function() {
    // Limpiar el contenido del textarea cuando la página se cargue
    document.getElementById("enciptadoEntrada").value = "Ingrese el texto aquí";
    document.getElementById("textoEncriptado").value=""
};

var textarea = document.getElementById("enciptadoEntrada");
var estadoGuardado = localStorage.getItem("estadoTextarea");
if (estadoGuardado) {
    textarea.value = estadoGuardado;
}
textarea.addEventListener("focus", function() {
    // Limpiar el contenido del textarea
    this.value = "";
});

textarea.addEventListener("blur", function() {
    // Restaurar el contenido predeterminado del textarea cuando no está enfocado
    if (!this.value) {
        this.value = "Ingrese el texto aquí";
    }
});
textarea.addEventListener("input", function() {
    localStorage.setItem("estadoTextarea", this.value);
});





function enciptar(){
    // let numeroDeUsuario = parseInt(document.getElementById('').value);
    let enciptadoEntrada = document.getElementById("enciptadoEntrada").value.toLowerCase();
    var imagen = document.getElementById("imagenGato");
    let textarea = document.getElementById("textoEncriptado");
    let enunciado = document.getElementById("menseje01");
    let enunciado02 = document.getElementById("mensaje02");
    let botonCopiar = document.getElementById("botonCopiar");
   
    
    if (enciptadoEntrada === "ingrese el texto aquí") {
        alert("Por favor, ingrese una palabra antes de encriptar.");
        imagen.style.opacity=1.0;
        return; // Salir de la función si el texto es igual al texto por defecto
    }
    //enciptar palabras clave
    var textoEncriptado = enciptadoEntrada
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "uaft");
    imagen.style.opacity=0.01;//desvanecer imagen
    textarea.style.backgroundColor="#ffffff";
    // enunciado.style.zIndex=-1;
    enunciado.style.display = "none";//enunciado <p>
    enunciado02.style.display = "none";//enunciado <h2>
    botonCopiar.style.display="inline"


    document.getElementById("textoEncriptado").value=textoEncriptado;
    // textoEncriptado = "";
    // console.log(textoEncriptado)

    

}

function desencriptar(){
    let textoEncriptado=document.getElementById("textoEncriptado").value;

    if(textoEncriptado===""){
        alert("Todavia no ingresa el texto a desencriptar");
        return;
    }
    //gato = gaitober
    //hola = hoberlai
    var textoDesencriptado = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/uaft/g, "u");

    document.getElementById("textoEncriptado").value=textoDesencriptado;
}

function copiar() { 
    let textarea = document.getElementById("textoEncriptado");

    textarea.select();
    document.execCommand("copy");

    // Deseleccionar el texto para evitar que permanezca resaltado
    textarea.setSelectionRange(0, 0);
    alert("¡Texto copiado al portapapeles!");
    // document.getElementById("textoEncriptado").value="";
}



// No permitir Mayusculas ni acentos
var textarea = document.getElementById('enciptadoEntrada');

textarea.addEventListener('input', function() {
    var texto = textarea.value;

    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    textarea.value = texto;
});



