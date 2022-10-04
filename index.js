const express = require('express'); // Importar biblioteca do express
const server = express();
server.use(express.json());
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));

function Empregado(id, nome, funcao, salario) {
    this.id = id;
    this.nome = nome;
    this.funcao = funcao;
    this.salario = salario;
}
const empregados = new Empregado();
const totalEmpregados = []


// let id = document.getElementById("id").value;
// let nome = document.getElementById("nome").value;
// let funcao = document.getElementById("funcao").value;
// let salario = document.getElementById("salario").value;


server.get("/empregados", (req, res) => {
    return res.json(totalEmpregados);
})

// MÉTODO POST
server.post("/empregados", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { funcao } = req.body;
    const { salario } = req.body;

    const empregado = new Empregado(id, nome, funcao, salario)
    // empregados.push(id);
    // empregados.push(nome);
    // empregados.push(funcao);
    // empregados.push(salario);  
    totalEmpregados.push(empregado)
    return res.json(totalEmpregados);
});

// PUT
server.put("/empregados/:index", (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    const { id } = req.body;
    const { nome } = req.body;
    const { funcao } = req.body;
    const { salario } = req.body;
    empregados[index] = id;
    empregados[index] = nome;
    empregados[index] = funcao;
    empregados[index] = salario;
    return res.json(empregados);
});

// DELETE
server.delete("/empregados/:index", (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    empregados.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
    return res.send();
});

server.listen(3000); // Escutar porta 3000