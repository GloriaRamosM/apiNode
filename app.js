import express from "express";

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.get("/api/frase", (req, res) => {
  res.send("Hola");
});

// Levantar el servidor
const server = app.listen(port, () => console.log("Listening on PORT 3000"));
