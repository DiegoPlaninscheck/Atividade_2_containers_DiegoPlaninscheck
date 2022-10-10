const express = require("express");
const router = express.Router();

const pessoaController = require("./api/pessoa/pessoa.controller")

router.use("/pessoa", pessoaController)

module.exports = router;