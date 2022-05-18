const nome = "Caio Jablonski";
let nome2 = "";
let pessoaDefault = {
    nome: "Caio Jablonski",
    idade: "26",
    trabalho: "dar trabalho" 
}

let nomes = ["Caio Jablonski", "Gabriele Alves","Eduardo Jablonski"]
let pessoas = [
    {
        nome: "Caio Jablonski",
        idade: "26",
        trabalho: "dar trabalho"  
    },
    {
        nome: "Gabriele Alves",
        idade: "23",
        trabalho: "dar trabalho"
    },
    {
        nome: "Eduardo Jablonski",
        idade: "21",
        trabalho: "dar trabalho"
    }
]

function alterarnome() {
    nome2 = "Jaspion"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Gon",
    idade: "12",
    trabalho: "hunter"
});

imprimirPessoas();




//mprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Gabriele ALves",
//    idade: "23",
//    trabalho: "dar trabalho" 
//})



//recebeEalteranome("Changeman");
//recebeEalteranome("Jiraya");

//alterarnome();