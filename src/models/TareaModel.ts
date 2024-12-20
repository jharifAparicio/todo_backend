class TareaModel {
    titulo: string;
    contenido: string;
    fechaCreacion: Date | null;
    fechaVencimiento: Date | null;
    idUsuario: number;
    estado?: string;
    id?: number;

    constructor(
        titulo: string,
        contenido: string,
        fechaCreacion: Date = new Date(new Date().toUTCString()),
        fechaVencimiento: Date | null,
        idUsuario: number,
        estado?: string,
        id?: number,
    ) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fechaCreacion = fechaCreacion || new Date();
        this.fechaVencimiento = fechaVencimiento;
        this.estado = estado;
        this.idUsuario = idUsuario;
    }
}

export default TareaModel;
