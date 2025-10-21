import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

// Crear la app
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Routing
app.use("/", usuarioRoutes);

// Arrancar la app
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});