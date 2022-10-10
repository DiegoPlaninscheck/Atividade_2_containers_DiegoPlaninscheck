const express = require("express");
const router = express.Router();

const produtoController = require("./api/produto/produto.controller")

router.use("/cadastrar-produto", produtoController)

module.exports = router;