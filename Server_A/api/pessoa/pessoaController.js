const express = require("express");
const pessoaHandler = require("./pessoaHandler")
const router = express.Router();

router.get("/buscar", async (req, res) => {
    res.json(await pessoaHandler.buscarPessoas());
});

router.post("/cadastrar", async (req, res) => {
    res.json(await pessoaHandler.cadastrarPessoa(req.body));
})

router.get("/login/:CPF/:Password", async (req, res) => {
    res.json(await pessoaHandler.login(req.params.CPF, req.params.Password));
})

module.exports = router;