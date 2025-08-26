console.log("Olá mundo!");

console.log("Olá mundo 2!");

for (let i = 0; i < 5; i++) {
    console.log("Olá mundo " + i + "!");
}

function saudacaoPessoal(nome) {
    console.log("Olá " + nome + "!");
    console.log("Bem-vindo(a) ao nosso querido programa!");
}

saudacaoPessoal("Maria");
saudacaoPessoal("João");
saudacaoPessoal("Ana");

for (let i = 0; i < 10; i++) {
    saudacaoPessoal("Pessoa " + i);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}