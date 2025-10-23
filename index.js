import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

// Crear la app
const app = express();

// Definir puerto
const port = process.env.PORT || 3000;

// Definir la carpeta publica
app.use(express.static("public"));

// Habilitar PUG
app.set("view engine", "pug");

// Routing
app.use("/auth", usuarioRoutes);

// Arrancar la app
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});