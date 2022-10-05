const express = require('express'); // Importar biblioteca do express
const server = express();
server.use(express.json());
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false })); // Para requisitar dados dos inputs

// INSTÂNCIA DO FUNCIONÁRIO
function Empregado(id, nome, funcao, salario) {
    this.id = id;
    this.nome = nome;
    this.funcao = funcao;
    this.salario = salario;
}

const totalEmpregados = [];

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
    empregado[index] = id;
    //empregado[index] = nome;
    //empregado[index] = funcao;
    //empregado[index] = salario;
    return res.json(totalEmpregados);
});

// DELETE
server.post("/empregados/deletar/:index", (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    totalEmpregados.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
    return res.send(totalEmpregados);
});

server.listen(3000); // Escutar porta 3000