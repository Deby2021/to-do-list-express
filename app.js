//root do nosso projeto

const express = require("express");
const app = express();
//const port = 3000

//quando precisar passar json pelo express
app.use(express.json());

//midleware
const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
};

app.use(log);

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de Tarefas</h1> :|");
});

//devolvendo json através do express
app.get("/json", (req, res) => {
  //monstrando o json através do express
  //console.log(req.body); já tem
  res.json({ title: "Tarefa X", done: true });
});

//app.listen(port, () => {
//console.log(`Example app listening on port ${port}`);
//});

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});
