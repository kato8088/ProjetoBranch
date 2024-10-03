// estrutura de repetição for
console.log("for")
for (let i=0; i<10; i++){
    console.log(i);
}

// estrutura de repetição while
console.log("while")
let f = 0;
while (f < 10){
    console.log(f);
    f++;
}

// do while
let w = 0;

console.log("do while")
do {
    console.log(w);
    w++;
}
while (w<5);

//funções

function ola(nome){
    //string literal (crase ``) ou template string (${}), chama a variável
    console.log(`seja bem vindo, ${nome}`);
  //  alert(`Seja bem vindo ${nome}`);
    document.write(`seja bem vindo ${nome}`);
}

ola("jose"); 

// arrow function (=> eh igual a escrever "function")

const hello=()=>(console.log("funcao arrow function"));

hello();

// array [], objeto {} e metodos ()

let jogadores = [
    {nome: "Huguinho", idade:17},
    {nome: "Zezinho", idade:18},
    {nome: "Luizinho", idade:19}
]

// map() eh um metodo de percorrer, bem parecido com for
let listarJogadores = jogadores.map(function(item){
    //return item.idade;
    return item;

});

console.log(listarJogadores);