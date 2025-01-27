import { Response, Request } from "express";
import usuarioService from "@services/usuarioService";
import UsuarioModel from "@models/usuarioModel";

class usuarioController {
    static async crearUsuario(req: Request, res: Response) {
        try {
            const usuario = req.body as UsuarioModel;
            const usuarioCreado = await usuarioService.crearUsuario(usuario);
            res.status(201).json({
                usuario: usuarioCreado
            });
        } catch (error) {
            res.status(400).json({
                message: "error al crear el usuario" + error,
            });
        }
    }
    static async obtenerUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await usuarioService.obtenerUsuarios();
            res.status(200).json({
                usuarios: usuarios,
            });
        } catch (error) {
            res.status(400).json({
                message: "error al obtener los usuarios" + error,
            });
        }
    }

    static async obtenerUsuarioPorCorreo(req: Request, res: Response) {
        try {
            const correo = req.params.correo as string;
            const usuario = await usuarioService.obtenerUsuarioPorCorreo(correo);
            res.status(200).json({
                usuario: usuario,
            });
        } catch (error) {
            res.status(400).json({
                message: "error al obtener el usuario" + error,
            })
        }
    }

    static async actualizarUsuario(req: Request, res: Response) {
        try {
            const usuario = req.body as UsuarioModel;
            const usuarioActualizado = await usuarioService.actualizarUsuario(usuario);
            res.status(200).json({
                usuario: usuarioActualizado,
            });
        } catch (error) {
            res.status(400).json({
                message: "error al actualizar el usuario" + error,
            });
        }
    }

    static async eliminarUsuario(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const usuarioEliminado = await usuarioService.eliminarUsuario(id);
            res.status(200).json({
                usuario: usuarioEliminado,
            });
        } catch (error) {
            res.status(400).json({
                message: "error al eliminar el usuario controlador" + error,
            });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { correo, contrasena } = req.body;

            const { token, usuario } = await usuarioService.login(correo, contrasena);

            res.status(200).json({
                mensaje: "sesion iniciada",
                token: token,
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    correo: usuario.correo,
                    perfil: usuario.perfil,
                },
            });
        } catch (error) {
            res.status(400).json({
                message: "error al iniciar sesion" + error,
            });

        }
    }
}

export default usuarioController;