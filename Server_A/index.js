const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get("/buscar", (req, res) => {
    res.send(listaPessoas);
})

app.post("/cadastrar", (req, res) => {
    listaPessoas.push({
        "nome": req.body.nome,
        "senha": req.body.senha
    })
    res.send(listaPessoas);
})

app.get("/login/:nome/:senha", (req, res) => {
    const usuario = listaPessoas.find(e => e["user"] == req.params.nome && e["senha"] == req.params.senha)
    console.log(usuario);
    usuario ? res.json(true) : res.json(false)
})

app.listen(port, () => console.log(`Server on port http://localhost:${port}`))


let listaPessoas = [
    { nome: "Diego", senha: "123" },
    { nome: "Thiago", senha: "321" },
]