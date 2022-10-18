const express = require("express");
const produtoHandler = require("./produtoHandler")
const router = express.Router();

router.get("/buscar", async (req, res) => {
    res.json(await produtoHandler.buscarProdutos());
});

router.post("/cadastrar", async (req, res) => {
    res.json(await produtoHandler.cadastrarProduto(req.body));
})

module.exports = router;