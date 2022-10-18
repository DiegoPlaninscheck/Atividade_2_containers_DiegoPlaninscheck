const tabela = "Users";

const crud = require("../../crud/index");

async function buscarPessoas() {
    return await crud.buscar(tabela);
}

async function cadastrarPessoa(dados) {
    return await crud.salvar(tabela, false, dados);
}

async function login(cpf, password) {
    return (await crud.buscar()).filter((pessoa) => pessoa.cpf == cpf && pessoa.password == password);
}

module.exports = { buscarPessoas, cadastrarPessoa, login }