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
    alert(`Seja bem vindo ${nome}`);
    document.write(`seja bem vindo ${nome}`);
}

ola("sergiu"); 