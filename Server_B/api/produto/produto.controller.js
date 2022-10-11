const express = require("express");

const router = express.Router();

const produtoHandler = require("./produto.handler");

router.post("/cadastrar", (req, res) => {
    res.json(produtoHandler.cadastrarProduto(req.body));
})

module.exports = router;