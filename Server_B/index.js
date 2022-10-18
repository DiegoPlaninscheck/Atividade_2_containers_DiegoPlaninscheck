const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router")

app.use(express.json());

app.use("/api", router);

// var fetch = require("node-fetch")
// app.post("/cadastrarProduto", async (req, res) => {
//     const url = `http://server-a:3000/login/${req.body.nome}/${req.body.senha}`
//     fetch(url).then(res => res.text()).then(text => {
//         console.log("entrou fetch");
//         if (text) {
//             listaProdutos.push({
//                 "descricao": req.body.descricao,
//                 "valor": req.body.valor
//             })
//             res.send(listaProdutos);
//         } else {
//             res.send("Deu ruim");
//         }
//     })
// })

app.listen(port, () => console.log(`Server on port http://localhost:${port}`));