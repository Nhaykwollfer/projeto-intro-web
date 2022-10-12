//1ª SEMANA

const veiculo1 = "GURGEL"
const idade1 = 32
const combGaso1 = true

const veiculo2 = "CORCEL"
const idade2 = 42
const combGaso2 = true

const veiculo3 = "MONZA"
const idade3 = 40
const combGaso3 = false

const soma = idade1 + idade2 + idade3
const media = soma/3
console.log(media)

const combustiveis = combGaso1 && combGaso2 && combGaso3;
console.log(combustiveis)

// //2ª SEMANA

const arrayEspecie1 = "Coleção"
const arrayEspecie2 = "Passageiro"
const arrayEspecie3 = "Passageiro"

console.log(`Veículo: ${veiculo1}\n Idade: ${idade1} \n Gasolina: ${combGaso1}\n Especie: ${arrayEspecie1}`);
console.log(`Veículo: ${veiculo2}\n Idade: ${idade2} \n Gasolina: ${combGaso2}\n Especie: ${arrayEspecie2}`);
console.log(`Veículo: ${veiculo3}\n Idade: ${idade3} \n Gasolina: ${combGaso3}\n Especie: ${arrayEspecie3}`);

// // 3ª SEMANA

carro1 = {
    veiculo: "gurgelL",
    idade: 32,
    combGaso: true,
    imagem: "./imagens/gurgel-supermini.webp",
    especie: "Coleção",
    link: "https://pt.wikipedia.org/wiki/Gurgel"
}
carro2 = {
    veiculo: "corcelL",
    idade: 42,
    combGaso: true,
    imagem: "./imagens/ford-corcel.jpg",
    especie: "Passageiro",
    link: "https://pt.wikipedia.org/wiki/Ford_Corcel"
}
carro3 = {
    veiculo: "monza",
    idade3: 40,
    combGaso: false,
    imagem: "./imagens/monza-brasil.webp",
    especie: "Esportivo",
    link: "https://pt.wikipedia.org/wiki/Chevrolet_Monza"
}

const arrayObjeto = []

arrayObjeto.push(carro1, carro2, carro3)
console.log(arrayObjeto)

arrayDeObjetos = [
    {
        veiculo: "gurgel",
        idade: 32,
        combGaso: "Gasolina",
        imagem: "./imagens/gurgel-supermini.webp",
        especie: "Coleção",
        link: "https://pt.wikipedia.org/wiki/Gurgel"
    },
    {
        veiculo: "corcel",
        idade: 42,
        combGaso: "Gasolina",
        imagem: "./imagens/ford-corcel.jpg",
        especie: "Passageiro",
        link: "https://pt.wikipedia.org/wiki/Ford_Corcel"
    },
    {
        veiculo: "monza",
        idade3: 40,
        combGaso: "Alcool",
        imagem: "./imagens/monza-brasil.webp",
        especie: "Esportivo",
        link: "https://pt.wikipedia.org/wiki/Chevrolet_Monza"
    } 
]

// 4ª SEMANA

const arrayObjetos = []

if(carro1.idade >= 40 === true){
    arrayObjetos.push(carro1)
}else{
    console.log("Carro com menos de 40 anos")
}
if(carro2.idade >= 40 === true){
    arrayObjetos.push(carro2)
    console.log("Carro possui 40 anos ou mais")
}else{
    console.log("Carro com menos de 40 anos")
}
if(carro3.idade >= 40 === true){
    arrayObjetos.push(carro3)
    console.log("Carro possui 40 anos ou mais")
}else{
    console.log("Carro com menos de 40 anos")
}
console.log(arrayObjetos)
// alert(`O carro ${veiculo1} não possui 40 anos ou mais`)

// 5ª SEMANA

const array = [
    ["Gurgel", 32, "Gasolina", "Coleção"],  
    ["Corcel", 40, "Gasolina", "Passajeiro"],  
    ["Monza", 40, "Alcool", "Passajeiro"]   
]
 for(i = 0; i <= 2; i++){
    console.log(`veiculo ${i+1} - ${array[i]}`);
 }

//  6ª SEMANA

function meuObjeto (objeto){
    let stringObjeto = ''
    stringObjeto = objeto
    console.log(stringObjeto)
}

meuObjeto(carro3)

const funcRetorno = (arrayDeObjetos, input)=> {
    for (i in arrayDeObjetos) {
        for (j in arrayDeObjetos[i]) {
            if (arrayDeObjetos[i][j] === input) {  
                let main = document.getElementById("main")
                let div = document.createElement('div')
                let section = document.createElement("section")
                let imagem = document.createElement("img")
                let ul = document.createElement("ul")
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                let li3 = document.createElement("li")
                let li4 = document.createElement("li")
                let a = document.createElement("a")

                div.setAttribute("id","div-sections")
                section.setAttribute("id", "section1")
                a.setAttribute("href", arrayDeObjetos[i].link)
                a.setAttribute("target", "blank")
                a.innerHTML = arrayDeObjetos[i].veiculo.toUpperCase()
                li1.innerHTML = `Nome: `
                li2.innerHTML = `Idade: ${arrayDeObjetos[i].idade}`
                li3.innerHTML = `Combustivel: ${arrayDeObjetos[i].combGaso}`
                li4.innerHTML = `Classificação: ${arrayDeObjetos[i].especie}`
                imagem.src = arrayDeObjetos[i].imagem

                main.appendChild(div)
                div.appendChild(section)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                li1.appendChild(a)
                section.appendChild(imagem)
            }
        }
    }
} 

for(i in arrayDeObjetos){
    let div = document.getElementById('div-sections')
    let section = document.createElement("section")
    let imagem = document.createElement("img")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let a = document.createElement("a")

    section.setAttribute("id", "section1")
    a.setAttribute("href", arrayDeObjetos[i].link)
    a.setAttribute("target", "blank")
    a.innerHTML = arrayDeObjetos[i].veiculo.toUpperCase()
    li1.innerHTML = `Nome: `
    li2.innerHTML = `Idade: ${arrayDeObjetos[i].idade}`
    li3.innerHTML = `Combustivel: ${arrayDeObjetos[i].combGaso}`
    li4.innerHTML = `Classificação: ${arrayDeObjetos[i].especie}`
    imagem.src = arrayDeObjetos[i].imagem

    div.appendChild(section)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    li1.appendChild(a)
    section.appendChild(imagem)
}

function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()
    if(input === ""){
        alert("Insira o Nome de um Veículo")
    }else{
        document.getElementById("div-sections").remove("div")
        funcRetorno(arrayDeObjetos, input)
    }
}
// Agradecimentos ao meu colega da turma Barbosa A, Arthur pela ajuda na conclusão do DOM e na busca do objeto, agradeço também a todos os professores também pela atenção e carinho de todos professores e instrutores que sempre estão dispondo de sua paciência  