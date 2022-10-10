const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router");

app.use(express.json());

app.use("/api", router);

app.use("/", (req, res) => {
    res.send("Server B")
});

app.listen(port, () => console.log(`Server on port http://localhost:${port}`));