//root do nosso projeto

const express = require("express");
const app = express();
//const port = 3000

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de Tarefas</h1> :|");
});

//devolvendo json através do express
app.get("/json", (req, res) => {
  res.json({ title: "Tarefa X", done: true });
});

//app.listen(port, () => {
//console.log(`Example app listening on port ${port}`);
//});

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});
