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



usuario.addEventListener("input", function (evento) {

    this.value = this.value.toLowerCase();

    if (/[^a-z]/g.test(this.value)) {
        // text-danger
        mensaje.textContent = "Esta tratando de ingresar un valor no permitido";

        this.style.borderColor = "red"

        this.style.borderWidth = "2px"


    } else if (!this.value) {
        // text-danger
        mensaje.textContent = "Campo requerido";
        this.style.borderColor = "yellow"

        this.borderColor = "2px"

    } else {
        // text-success
        
        mensaje.textContent = "Usuario correcto";

        this.style.borderColor = "green"
        this.borderColor = "2px"
    }

    this.value = this.value.replace(/[^a-z]/g, "");

});

let password = document.getElementById("password");
let mensajePassword = document.getElementById("mensajePassword");

password.addEventListener("input", function (){
    if(this.value.lenth === 0){
        mensajePassword.textContent = "Campo requerido";
        mensajePassword.style.color = "yellow";
        this.style.borderColor = "yellow";

    }else if (this.value.length <= 10){
        mensajePassword.textContent = "Debe tener mas de 10 caracteres";
        mensajePassword.style.color = "red";
        this.style.borderColor = "red";
    }else{
        mensajePassword.textContent = "Contraseña valida";
        mensajePassword.style.color = "green";
        this.style.borderColor = "green";
    }
});