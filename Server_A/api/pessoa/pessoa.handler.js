let listaPessoa = [
    { email: "diego", senha: "123" },
    { email: "thiago", senha: "321" },
]

let logado = {};

function login({ email, senha }) {
    for (const pessoa of listaPessoa) {
        if (email == pessoa.email) {
            if (senha == pessoa.senha) {
                logado = {
                    email: email,
                    senha: senha,
                }
                return pessoa;
            }
        }
    }
    return { message: "Login incorreto!" }
}

function cadastrarPessoa({ email, senha }) {
    for (const p of listaPessoa) {
        if (email == p.email && senha == p.senha) {
            return { message: "Pessoa já existente! " }
        } else {
            let pessoa = {
                email: email,
                senha: senha
            }
            listaPessoa.push(pessoa);
            return pessoa
        }
    }
}


function logado() {
    return logado;
}

module.exports = { login, cadastrarPessoa, logado }