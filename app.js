//Andres Camilo Benitez Rodiño GRUPO-B
//Sandra Milena Morales Polo GRUPO-B
//Pula Andrea Ochoa Ochoa GRUPO-B

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola a todos los estudiantes!");
});

app.post("/personas", (req, res) => {
  console.log(req.body);
  res.send("Recibido");
});

app.post("/cuenta", (req,res) => {
    console.log(req.body);
    res.send("Transaccion finalizada")
})

app.listen(port, () => {
  console.log("http://localhost:3000");
});

//Andres Camilo Benitez Rodiño
//Sandra Milena Morales Polo
//Pula Andrea Ochoa Ochoa
