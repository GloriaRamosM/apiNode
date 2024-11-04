import express from "express";

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // esto es para Interpretar el Req.body. Decodifica el mensaje

//Routes

app.get("/api/frase", (req, res) => {
  res.send("Hola");
});

app.get("api/users", (req, res) => {
  res.send("Me tengo que traer todos los usuarios, estoy volviendo de a poco");
});
let users = [];
//El post siempre crea algo, siempre se usa el Body para recibir la data
app.post("/api/user", (req, res) => {
  let user = req.body;

  if (!user.name || !user.last_name) {
    return res.status(400).send({ status: "error" });
  }

  users.push(user);

  return res.status(200).send({ status: "Sucess" });
});

// Levantar el servidor
const server = app.listen(port, () => console.log("Listening on PORT 3000"));
