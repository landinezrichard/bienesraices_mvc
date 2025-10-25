import express from "express";
import { formularioLogin, formularioRegistro, formularioOlvidoPassword } from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/olvido-password", formularioOlvidoPassword);

export default router; 