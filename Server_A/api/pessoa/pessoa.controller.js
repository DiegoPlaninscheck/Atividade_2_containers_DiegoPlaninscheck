const express = require("express");

const router = express.Router();

const pessoaHandler = require("./pessoa.handler");

router.get("/login", (req, res) => {
    return res.json(pessoaHandler.login(req.body));
})

router.get("/logado", (req, res) => {
    return res.json(pessoaHandler.logado());
})

router.post("/cadastrar", (req, res) => {
    res.json(pessoaHandler.cadastrarPessoa(req.body));
})

module.exports = router;