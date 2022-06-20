document.getElementById("iniciar").addEventListener("click", reset);

const divTorre1 = document.createElement("div");
divTorre1.id = "torre1";
divTorre1.className = "torre";
divTorre1.addEventListener("dblclick", identificarOrigemDestino);
document.getElementById("areaTorres").appendChild(divTorre1)


const divTorre2 = document.createElement("div");
divTorre2.id = "torre2";
divTorre2.className = "torre";
divTorre2.addEventListener("dblclick", identificarOrigemDestino);
document.getElementById("areaTorres").appendChild(divTorre2)

const divTorre3 = document.createElement("div");
divTorre3.id = "torre3";
divTorre3.className = "torre";
divTorre3.addEventListener("dblclick", identificarOrigemDestino);
document.getElementById("areaTorres").appendChild(divTorre3)

const divDisco4 = document.createElement("div")
divDisco4.id = "disco4"
divDisco4.className = "disco4"
divTorre1.appendChild(divDisco4)

const divDisco3 = document.createElement("div");
divDisco3.id = "disco3";
divDisco3.className = "disco3";
divTorre1.appendChild(divDisco3)

const divDisco2 = document.createElement("div");
divDisco2.id = "disco2";
divDisco2.className = "disco2";
divTorre1.appendChild(divDisco2)

const divDisco1 = document.createElement("div");
divDisco1.id = "disco1";
divDisco1.className = "disco1";
divTorre1.appendChild(divDisco1)




const torreInicial = document.getElementById("torre1")
let qtdDiscosInicial = document.getElementById("torre1").childElementCount
let origem = null
let destino = null
let contadorMovimentos = 0

console.log('Quantidade de Discos Inicial:', qtdDiscosInicial)

function reset() {
    contadorMovimentos = 0
    let valorRadioButton = ""
    document.getElementById("contador").innerHTML = contadorMovimentos
    document.getElementById("torre3").innerHTML = ''
    document.getElementById("torre2").innerHTML = ''
    document.getElementById("torre1").innerHTML = ''

    valorRadioButton = document.querySelector('input[name="dificuldade"]:checked').value

    if (valorRadioButton == 'basico') {
        qtdDiscosInicial = 3
        document.getElementById("torre1").innerHTML = '<div class="disco3" id="disco3"></div> <div class="disco2" id="disco2"></div> <div class="disco1" id="disco1"></div>'
    } else if (valorRadioButton == 'intermediario') {
        qtdDiscosInicial = 4
        document.getElementById("torre1").innerHTML = '<div class="disco4" id="disco4"></div> <div class="disco3" id="disco3"></div> <div class="disco2" id="disco2"></div> <div class="disco1" id="disco1"></div>'
    } else if (valorRadioButton == 'avancado') {
        qtdDiscosInicial = 5
        document.getElementById("torre1").innerHTML = '<div class="disco5" id="disco5"></div> <div class="disco4" id="disco4"></div> <div class="disco3" id="disco3"></div> <div class="disco2" id="disco2"></div> <div class="disco1" id="disco1"></div>'
    }

}

function identificarOrigemDestino(e) {
    if (origem === null) {
        origem = e.currentTarget
        console.log('Origem: ', origem)
    } else if (origem != e.currentTarget) {
        destino = e.currentTarget
        console.log('Destino: ', destino)
        moverDisco(e)
        if (verificarConclusao())
            document.getElementById("titulo").innerHTML = 'Parabéns! Você conseguiu com ' + contadorMovimentos + ' movimentos.'
    }
}

function moverDisco(e) {
    if (origem != null && destino != null) {
        console.log('Quantidade de Filhos:', origem.childElementCount)
        console.log('Ultimo Elemento:', origem.lastElementChild)

        if (origem.childElementCount == 0) {
            console.log('A torre de origem selecionada não possui discos!')
            origem = null
            destino = null
            return false
        }


        if (destino.lastElementChild != null && origem.lastElementChild.clientWidth > destino.lastElementChild.clientWidth) {
            console.log('O Tamanho do disco na origem é maior que o tamanho do último disco no destino')
            origem = null
            destino = null
            return false
        }

        destino.appendChild(origem.lastElementChild)
        contadorMovimentos++
        document.getElementById("contador").innerHTML = contadorMovimentos
        origem = null
        destino = null
    }
}

function verificarConclusao() {
    if ((document.getElementById("torre2").childElementCount == qtdDiscosInicial) || (document.getElementById("torre3").childElementCount == qtdDiscosInicial))
        return true
    else
        return false
}