//1
var dni = document.getElementById("dni");

dni.addEventListener("input", validarDNI, false);

function validarDNI(){
    var dniSinLetra= dni.value.slice(0,-1);
    var letraDni= dni.value.slice(-1);

    if(esCorrecto(dniSinLetra) && calcularLetra(dniSinLetra) == letraDni){
        dni.setCustomValidity("");
    }else{
        dni.setCustomValidity("La letra no es correcta");
    }
}

function esCorrecto(dni){
    return /^(\d{8})$/.test(dni);
   }

function calcularLetra(dni){
    let secuenciaLetras= "TRWAGMYFPDXBNJZSQVHLCKE";
    let num_letra= dni % 23;
    let letra = secuenciaLetras[num_letra];
    return letra;
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
var form4= document.getElementById("form4");
var botEnviar= document.getElementById("botForm4");
var select1= document.getElementById("sel1");
var select2= document.getElementById("sel2");

select1.addEventListener("input", hacerSegundoSelect,false);
botEnviar.addEventListener("click", enviar,false);

function hacerSegundoSelect(){

    select2.innerHTML= "<option>No seleccionado</option>";

    let op1= document.createElement("option");
    let op2= document.createElement("option");
    let op3= document.createElement("option");

    if(select1.value == 'a'){
        op1.innerText = "Alicante";
        op1.value = 'a';

        op2.innerText = "Elche";
        op2.value = 'b';

        op3.innerText = "Petrer";
        op3.value = 'c';
    }else if(select1.value == 'c'){
        op1.innerText = "Castellón";
        op1.value = 'a';

        op2.innerText = "Oropesa";
        op2.value = 'b';

        op3.innerText = "Vinaroz";
        op3.value = 'c';
    }else{
        op1.innerText = "Valencia";
        op1.value = 'a';

        op2.innerText = "Xativa";
        op2.value = 'b';

        op3.innerText = "Torrent";
        op3.value = 'c';
    }

    select2.appendChild(op1);
    select2.appendChild(op2);
    select2.appendChild(op3);
}

function enviar(){
    comprobarSelects();
    if (form4.checkValidity()){
        form4.submit();
    }
}

function comprobarSelects(){
    if (select1.value == 'a' || select1.value == 'c' || select1.value == 'v'){
        select1.setCustomValidity("");
    }else{
        select1.setCustomValidity("Debes seleccionar una opción válida");
    }

    if(select2.value == 'a' || select2.value == 'b' || select2.value == 'c'){
        select2.setCustomValidity("");
    }else{
        select2.setCustomValidity("Debes seleccionar una opción válida");
    }
}