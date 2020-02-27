
const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

/* VERBOS HTTP
 
 GET Receber dados de um resource
 POST Enviar dados ou informações para serem processados por um resource
 PUT Atualizar dados de um resource
 DELETE Deletar um resource
 */

 //GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)




app.get("/clients", function(req, res) {
  res.json(data);
});

app.get('/clients/:id', function(req, res) {
   res.send('Ycaro' + req.params.id);

   res.json(id);
});

app.get("/clients/:id", function(req, res) {
  const { id } = req.params;  // PEGANDO O ID COM O MEU req.parâmetros que é o {id}

  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(404).json();

  res.json(client);
});

app.post("/clients", function(req, res) {
  const { name, email } = req.body;

  // salvar

  res.json({ name, email });
});

app.put("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clients/:id", function(req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});

app.listen(3000, function() {
  console.log("Server is running");
});




 
    