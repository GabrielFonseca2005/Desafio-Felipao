let Vitorias = 100
let Derrotas = 90

function saldo (Vitorias, Derrotas) {
    return Vitorias - Derrotas
}

function determinarNivel (saldo) {
    if (saldo <= 10) {
        return "Ferro"
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze"
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata"
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro"
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante" 
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendario"
    } else {
        return "Imortal"
    }
}

let saldoVitorias = saldo(Vitorias, Derrotas)
let nivel = determinarNivel(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível de ${nivel}`)

//Versão 2.0 do código gerado pelo chatGPT, ele usa arrows fuction

const saldoArrow = (vitorias, derrotas) => vitorias - derrotas

const determinarNivelArrow = saldo => {
    if (saldo <= 10) return "Ferro"
    else if (saldo <= 20) return "Bronze"
    else if (saldo <= 50) return "Prata"
    else if (saldo <= 80) return "Ouro"
    else if (saldo <= 90) return "Diamante"
    else if (saldo <= 100) return "Lendário"
    else return "Imortal"
}

let saldoNovo = saldoArrow(Vitorias, Derrotas)
let nivelNovo = determinarNivelArrow(saldoNovo)

console.log(`(Compactado) O Herói tem saldo de ${saldoNovo} vitórias e está no nível de ${nivelNovo}`)