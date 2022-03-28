//solução 1

function verificadorPalindromo(){
    let verificador = prompt("Digite uma palavra:")
    if(!verificador){
        alert(`Por favor digite uma palavra valida`);
    }

    else if(verificador === verificador.split("").reverse().join("")){
        alert(`A palavra ${verificador} é um palíndromo`);
        console.log("teste");
    }else{
        alert(`A palavra ${verificador} não é um palíndromo`)
    }
}

verificadorPalindromo()