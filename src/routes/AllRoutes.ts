import { Router } from "express";
import { usuarioController } from "@controllers/usuarioController";

const router = Router();

router.post("/usuario", usuarioController.crearUsuario);
router.get("/usuario", usuarioController.obtenerUsuarios);
router.get("/usuario/:correo", usuarioController.obtenerUsuarioPorCorreo);
router.put("/usuario", usuarioController.actualizarUsuario);
router.delete("/usuario/:id", usuarioController.eliminarUsuario);
router.post("/login", usuarioController.login);

export default router;