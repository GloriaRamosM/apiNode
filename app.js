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

// Levantar el servidor
const server = app.listen(port, () => console.log("Listening on PORT 3000"));
