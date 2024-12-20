const numA = document.getElementById("campoA");
const numB = document.getElementById("campoB");

const botao = document.querySelector("button");
const form = document.getElementById("form");

const message = document.getElementById("h-message");


while((numA === '')&&(numB === '')){
    botao.disabled = true;
}

function validaForm(){
    //console.log("teste: ")

    const formEValido = parseInt(numA.value) < parseInt(numB.value);
    if(formEValido){
        return true
    } else {
        return false
    }
};

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    console.log(e.preventDefault());

    let valid = validaForm();
    
    
    if( valid === true){
        
        message.classList.add("success-message");
        message.style.display = "block";
        message.innerHTML = `Meus parabéns, eu não tinha te explicado as exigências, mas mesmo assim você conseguiu`
        
        numA.value = "";
        numB.value = "";
    } else{
        message.classList.remove('success-message')
        message.classList.add("error-message");
        message.style.display = "block";
        message.innerHTML = `O envio não deu certo, porque o segundo número( ${numB.value} ) é menor ou igual ao primeiro( ${numA.value} )`;

        numA.value = "";
        numB.value = "";
    }



});

numA.addEventListener("keyup", function(e){

    if (e.target.value === ''){
        
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
    //console.log(e.target.value);

    
});

numB.addEventListener("keyup", function(e){

    if ((numA.value === '')){
        message.style.display = 'block';
    } else if(e.target.valeu === ''){
        message.style.display = 'none';
    }
    //console.log(e.target.value);

    
});

numA.addEventListener("change", function(e){

    console.log(e);
});

