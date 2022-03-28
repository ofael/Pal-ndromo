//solução 1

/*function verificadorPalindromo(){
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

verificadorPalindromo()*/

function verificadorPalindromo2(){
    let verificador = prompt("Digite uma palavra:")

    if(!verificador) return alert("String inexistente")

    for(let i = 0; i < verificador.length / 2; i++){
        if(verificador[i] !== verificador[verificador.length -1 -i]){
            return alert(`A palavra ${verificador} não é um palíndromo`)
        }
    }

    return alert(`A palavra ${verificador} é um palíndromo`)
}

verificadorPalindromo2()