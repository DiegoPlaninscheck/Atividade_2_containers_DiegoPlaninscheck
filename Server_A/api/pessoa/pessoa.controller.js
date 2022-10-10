const express = require("express");

const router = express.Router();

const pessoaHandler = require("./pessoa.handler");

router.get("/login", (req, res) => {
    return pessoaHandler.login(req.body);
})

router.post("/cadastrar", (req, res) => {
    pessoaHandler.cadastrarPessoa(req.body);
})

module.exports = router;