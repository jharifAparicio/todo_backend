const bcrypt = require('bcryptjs');
import jwt from "jsonwebtoken";
import usuarioRepository from "@repositories/usuarioRepository";
import UsuarioModel from "@models/usuarioModel";

class usuarioService {
    static async crearUsuario(usuario: UsuarioModel) {

        if (!usuario.nombre || !usuario.correo || !usuario.contrasena) {
            throw new Error("Faltan datos");
        }

        if (!usuario.perfil) {
            usuario.perfil = "https://res.cloudinary.com/dkgmldgwu/image/upload/v1734611036/fotos_perfil/wysgb8bofsube6sekut7.webp";
        }

        const hash = encriptarContrasena(usuario.contrasena);

        const Nuevousuario = new UsuarioModel(
            usuario.nombre,
            usuario.correo,
            hash,
            usuario.perfil
        )

        const usuarioCreado = await usuarioRepository.crearUsuario(Nuevousuario);

        return usuarioCreado;
    }

    static async obtenerUsuarios() {
        const usuarios = await usuarioRepository.obtenerUsuarios();
        return usuarios;
    }

    static async obtenerUsuarioPorCorreo(correo: string) {
        const usuario = await usuarioRepository.obtenerUsuarioPorCorreo(correo);
        return usuario;
    }

    static async actualizarUsuario(usuario: UsuarioModel) {
        const usuarioActualizado = await usuarioRepository.actualizarUsuario(usuario);
        return usuarioActualizado;
    }

    static async eliminarUsuario(id: number) {
        const usuarioEliminado = await usuarioRepository.eliminarUsuario(id);
        return usuarioEliminado;
    }

    static async login(correo: string, contrasena: string) {
        const usuario = await usuarioRepository.obtenerUsuarioPorCorreo(correo);
        const contrasenaCorrecta = bcrypt.compareSync(contrasena, usuario.contrasena);
        if (!contrasenaCorrecta) {
            throw new Error("credenciales incorrectas");
        }

        const payload = {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo,
            perfil: usuario.perfil
        }

        if (!Bun.env.SECRET_KEY_JWT) {
            throw new Error("SECRET_KEY_JWT is not defined");
        }

        const token = jwt.sign(payload, Bun.env.SECRET_KEY_JWT, { expiresIn: "1h" });

        return { token, usuario };
    }
}

function encriptarContrasena(contrasena: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(contrasena, salt);
}

export default usuarioService;