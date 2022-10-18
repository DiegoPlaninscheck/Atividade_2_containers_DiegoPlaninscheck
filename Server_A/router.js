const express = require('express');

const router = express.Router();

const pessoas = require("./api/pessoa/pessoaController");

router.use("/pessoas", pessoas);

module.exports = router;
