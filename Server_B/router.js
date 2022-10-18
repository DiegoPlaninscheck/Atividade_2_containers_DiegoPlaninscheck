const express = require('express');

const router = express.Router();

const produtos = require("./api/produto/produtoController");

router.use("/produtos", produtos);


module.exports = router;