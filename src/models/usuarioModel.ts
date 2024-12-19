export class UsuarioModel {
    id?: number;
    nombre: string;
    correo: string;
    perfil?: string;
    contrasena: string;
    fechaCreacion?: Date;
    constructor(
        nombre: string,
        correo: string,
        contrasena: string,
        perfil?: string,
        fechaCreacion?: Date,
        id?: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.perfil = perfil;
        this.contrasena = contrasena;
        this.fechaCreacion = fechaCreacion;
    }
}