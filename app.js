import express from "express";

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // esto es para Interpretar el Req.body. Decodifica el mensaje

//Routes

let users = [];
//  GET
app.get("/api/user", (req, res) => {
  return res.status(200).send({ users });
});

//POST
//El post siempre crea algo, siempre se usa el Body para recibir la data
app.post("/api/user", (req, res) => {
  let user = req.body;

  if (!user.first_name || !user.last_name) {
    return res
      .status(400)
      .send({ status: "error", error: "Datos incompletos" });
  }

  users.push(user);

  return res.status(200).send({ status: "Sucess", message: "User created" }); // El status 200 viene implicito cuando no se indica
});

// PUT

app.put("/api/user/:name", (req, res) => {
  let name = req.params.name;
});

//DELETE

app.delete("/api/user/:name", (req, res) => {
  let name = req.params.name;

  let currentLength = users.length;

  users = users.filter((user) => user.first_name != name);
  if (users.length === currentLength) {
    return res.status(404).send({ status: "error", error: "User not found" });
  }

  res.send({ status: "sucess", message: "User deleted" });
});
// Levantar el servidor
const server = app.listen(port, () => console.log("Listening on PORT 3000"));
