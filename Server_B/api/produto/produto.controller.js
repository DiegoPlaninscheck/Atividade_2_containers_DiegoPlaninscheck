const express = require("express");

const router = express.Router();

const produtoHandler = require("./produto.handler");

router.post("/cadastrar", (req, res) => {
    produtoHandler.cadastrarProduto();
})

module.exports = router;