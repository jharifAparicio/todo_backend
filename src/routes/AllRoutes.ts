import { Router } from "express";
import usuarioController from "@controllers/usuarioController";
import TareaController from "@controllers/tareaController";

const router = Router();

// rutas de usuario
router.post("/usuario", usuarioController.crearUsuario);
router.get("/usuario", usuarioController.obtenerUsuarios);
router.get("/usuario/:correo", usuarioController.obtenerUsuarioPorCorreo);
router.put("/usuario", usuarioController.actualizarUsuario);
router.delete("/usuario/:id", usuarioController.eliminarUsuario);
router.post("/login", usuarioController.login);

// rutas de tareas
router.post("/tarea", TareaController.crearTarea);
router.get("/tarea/:idUsuario", TareaController.obtenerTareasPorIdUsuario);
router.put("/tarea/:id", TareaController.actualizarTarea);
router.delete("/tarea/:id", TareaController.eliminarTarea);

export default router;