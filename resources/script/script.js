// Atividade 2
function calcularMedia(a, b, c){
    return (a + b + c) / 3 
}

let a = Number(prompt("Digite sua primeira nota: "));
let b = Number(prompt("Digite sua segunda nota: "));
let c = Number(prompt("Digite sua terceira nota: "));
let resultado = calcularMedia(a, b, c);

alert(`Sua média é ${resultado}`)

function verficarAprovacao(calcularMedia = 0){
    console.log(calcularMedia)
    if(calcularMedia >= 7){
        alert("Aprovado")
    }
    else if(calcularMedia >= 5 && calcularMedia < 7){
        alert("Recuperação")
    }
    else{
        alert("Reprovado")
    }
}

let verificar = verficarAprovacao(resultado);

