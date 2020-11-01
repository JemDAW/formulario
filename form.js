//1
var dni = document.getElementById("dni");

dni.addEventListener("input", validarDNI, false);

function validarDNI(){

}

//2
var email = document.getElementById("mail");

email.addEventListener("input", validarServidor, false);

function validarServidor(){
    const servidoresValidos = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "gva.es", "iespacomolla.es"];
    let servidor= email.value.split("@");
    for(let i=0; i< servidoresValidos.length;i++){
        if(servidor[1] == servidoresValidos[i]){
            email.setCustomValidity("");
            return true;
        }
    }
    email.setCustomValidity("Servidor no válido");
}


//3
var text1= document.getElementById("text1");
var text2= document.getElementById("text2");

text1.addEventListener("input", validarAnagrama, false)
text2.addEventListener("input", validarAnagrama, false);

function validarAnagrama(){
    if(esAnagrama(text1.value, text2.value)){
        text2.setCustomValidity("");
    }else{
        text2.setCustomValidity("No es un anagrama.")
    }
}

function esAnagrama(text1, text2){
    return text1.toLowerCase().split("").sort().join("") === text2.toLowerCase().split("").sort().join("");
  }

//4