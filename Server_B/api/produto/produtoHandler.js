const tabela = "Products";

const crud = require("../../crud/index");
const fetch = require("node-fetch");

async function buscarProdutos() {
    return await crud.buscar(tabela);
}

async function cadastrarProduto(dados) {
    const url = `http://server-a:3000/login/${dados.CPF}/${dados.Password}`
    fetch(url).then(res => res.text()).then(text => {
        if (text) {
            return crud.salvar(tabela, false, {
                description: dados.description, name: dados.name,
                price: dados.price, userCPF: dados.userCPF
            });
        } else {
            res.send("Deu ruim");
        }
    })
}

module.exports = { buscarProdutos, cadastrarProduto }