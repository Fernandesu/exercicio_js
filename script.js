const numA = document.getElementById("campoA");
const numB = document.getElementById("campoB");

const botao = document.querySelector("button");
const form = document.querySelector("form");

function validaForm(){
    //console.log("teste: ")

    const formEValido = parseFloat(numA.value) < parseFloat(numB.value);
    if(formEValido){
        return true
    } else {
        return false
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const failMessage = document.getElementById("error-message")
    const successMessage = 1;

    let valid = validaForm();

    if( valid === true){

        console.log(validaForm())
        numA.value = "";
        numB.value = "";
        failMessage.style.display =  "none";
    } else {
        console.log(failMessage)
        failMessage.style.display = "block";
        failMessage.innerHTML = `O envio não deu certo, porque o segundo número( ${numB.value} ) é menor que o primeiro( ${numA.value} )`;
    }

})











