// let usuario = document.getElementById("usuario");

// usuario.addEventListener("keydown", function(evento){
//     if(evento.keyCode === 8){
//         evento.preventDefault()

//         this.value += "AmoAlSena"
//     }
// })




// let input = document.getElementById("input", function(){
//     this.value = this.value.toLowerCase()
//     this.value = this.value.replace(/[^a-zA-Z]/g,"");

//     if(/[^a-z]/g.test(this.value)){
//         mensaje.textContent = "esta tratando de ingresar un valor no valido"
//     }else if(this.value == ""){
//         mensaje.textContent = "campo requerido"
//     }else{
//         this.style.borderColor = "green"

//         mensaje.textContent = "usuario correcto"

//     }
// })

let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");

usuario.addEventListener("input", function(e) {
    let valorLimpio = this.value.replace(/[^a-zA-Z0-9._-]/g, "");
    
    if (/[^a-zA-Z0-9._-]/.test(this.value)) {
        mensaje.textContent = "Carácter no válido (solo letras, numeros, -, _, .)";
        mensaje.style.color = "red";
    } else if (this.value.length >= 3) {
        mensaje.textContent = "Correcto";
        mensaje.style.color = "green";
    } else if (!this.value) {
        mensaje.textContent = "Campo requerido";
        this.style.borderColor = "yellow";
    } else {
        mensaje.textContent = "minimo 3 caracteres";
        mensaje.style.color = "red"; 
    }

    this.value = valorLimpio;
});

let password = document.getElementById("password");
let mensajePassword = document.getElementById("mensajePassword");
let contadorCaracteres = document.getElementById("ContadorCaracteres");

password.addEventListener("input", function() {

    contadorCaracteres.textContent = "Caracteres: " + this.value.length;

    let fuerte = this.value.length >= 10 &&
                 /[A-Z]/.test(this.value) &&
                 /[0-9]/.test(this.value) &&
                 /[^A-Za-z0-9]/.test(this.value);

    if (this.value.length === 0) {
        mensajePassword.textContent = "Campo requerido";
        mensajePassword.style.color = "yellow";
        this.style.borderColor = "yellow";

    } else if (!fuerte) {
        mensajePassword.textContent = "Contraseña débil";
        mensajePassword.style.color = "red";
        this.style.borderColor = "red";
        
    } else {
        mensajePassword.textContent = "Contraseña válida";
        mensajePassword.style.color = "green";
        this.style.borderColor = "green"; 
    }
});

function cambiar() {
    let inputPass = document.getElementById("password");
    let icono = document.querySelector("#retina i");

    if (inputPass.type === "password") {
        inputPass.type = "text";
        icono.classList.remove("bi-eye");
        icono.classList.add("bi-eye-slash");
    } else {
        inputPass.type = "password";
        icono.classList.remove("bi-eye-slash");
        icono.classList.add("bi-eye");
    }
}

let formLogin = document.getElementById("formLogin");
let mensajeEnvio = document.getElementById("mensajeEnvio");

let intentos = 0;
let bloqueado = false;

formLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    if (bloqueado) return;

    let usuarioValido = /^[a-zA-Z0-9._-]{3,}$/.test(usuario.value);
    let passFuerte = password.value.length >= 10 &&
                     /[A-Z]/.test(password.value) &&
                     /[0-9]/.test(password.value) &&
                     /[^A-Za-z0-9]/.test(password.value);

    if (usuarioValido && passFuerte) {
        mensajeEnvio.textContent = "Formulario enviado correctamente";
        mensajeEnvio.style.color = "green";
        formLogin.reset();
        contadorCaracteres.textContent = "";
        mensaje.textContent = "";
        mensajePassword.textContent = "";
        intentos = 0;
        return;
    }

    intentos++;
    mensajeEnvio.textContent = "Datos incorrectos intento " + intentos;
    mensajeEnvio.style.color = "red";

    if (intentos >= 3) {
        bloquearFormulario();
    }
});

function bloquearFormulario() {
    bloqueado = true;
    usuario.disabled = true;
    password.disabled = true;

    mensajeEnvio.textContent = "Formulario bloqueado 30 segundos";
    mensajeEnvio.style.color = "darkred";

    setTimeout(function() {
        bloqueado = false;
        usuario.disabled = false;
        password.disabled = false;
        mensajeEnvio.textContent = "";
        intentos = 0;
    }, 30000);
}
