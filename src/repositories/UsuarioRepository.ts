import prisma from "../prisma/client";
import { Usuario } from "../models/usuarioModel";

export class UsuarioRepository {
    async create(usuario: Usuario): Promise<Usuario> {
        const createdUsuario = await prisma.users.create({
            data: {
                name: usuario.name,
                email: usuario.email,
                password: usuario.password,
                avatar: usuario.avatar,
            },
        });
        return createdUsuario;
    }
}