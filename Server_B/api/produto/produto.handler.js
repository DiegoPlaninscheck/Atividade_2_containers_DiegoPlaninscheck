const fetch = require('node-fetch');

function cadastrarProduto({ email, senha }) {
    let login = fetch("htt://localhost:8080/api/pessoa/logado",
        { method: "GET", body: { email: email, senha: senha } })
        .then(response => response.json())
        .then(res => console.log(res))

    console.log(login);

}

module.exports = { cadastrarProduto, }