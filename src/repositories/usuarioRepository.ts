import prisma from "../prisma/client";
import { UsuarioModel } from "@models/usuarioModel";

export class usuarioRepository {
    static async crearUsuario(usuario: UsuarioModel): Promise<UsuarioModel> {
        const UsuarioCreado = await prisma.usuarios.create({
            data: {
                nombre: usuario.nombre,
                correo: usuario.correo,
                contrasena: usuario.contrasena,
                perfil: usuario.perfil,
            },
        });
        return UsuarioCreado;
    }

    static async obtenerUsuarios(): Promise<UsuarioModel[]> {
        const Usuarios = await prisma.usuarios.findMany();
        return Usuarios;
    }

    static async obtenerUsuarioPorCorreo(correo: string): Promise<UsuarioModel> {
        const Usuario = await prisma.usuarios.findUnique({
            where: {
                correo: correo,
            },
        });
        if (!Usuario) {
            throw new Error("Usuario no encontrado");
        }
        return Usuario;
    }

    static async actualizarUsuario(usuario: UsuarioModel): Promise<UsuarioModel> {
        const UsuarioActualizado = await prisma.usuarios.update({
            where: {
                id: usuario.id,
            },
            data: {
                nombre: usuario.nombre,
                correo: usuario.correo,
                contrasena: usuario.contrasena,
                perfil: usuario.perfil,
            },
        });
        return UsuarioActualizado;
    }

    static async eliminarUsuario(id: number): Promise<UsuarioModel> {
        const UsuarioEliminado = await prisma.usuarios.delete({
            where: {
                id: id,
            },
        });
        return UsuarioEliminado;
    }
}

