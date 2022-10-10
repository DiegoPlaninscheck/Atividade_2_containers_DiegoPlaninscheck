let listaPessoa = [
    { email: "diego", senha: "123" },
    { email: "thiago", senha: "321" },
]

function login({ email, senha }) {
    for (const pessoa of listaPessoa) {
        if (email == pessoa.email) {
            if (senha == pessoa.senha) {
                console.log(pessoa);
                return pessoa;
            }
        }
    }
}

function cadastrarPessoa({ email, senha }) {
    for (const pessoa of listaPessoa) {
        if (email == pessoa.email) {
            if (senha == pessoa.senha) {
                console.log("Ja existe");
            } else {
                let pessoa = {
                    email: email,
                    senha: senha
                }
                listaPessoa.push(pessoa);
            }
        }
    }
}

module.exports = { login, cadastrarPessoa }