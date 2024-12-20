import TareaRepository from "@repositories/TareaRepository";
import TareaModel from "@models/TareaModel";

class TareaService {
    static async crearTarea(tarea: TareaModel) {
        if (!tarea.titulo || !tarea.contenido || !tarea.idUsuario) {
            throw new Error("Faltan datos");
        }

        const NuevaTarea = new TareaModel(
            tarea.titulo,
            tarea.contenido,
            tarea.fechaCreacion || new Date(),
            tarea.fechaVencimiento,
            tarea.idUsuario,
            tarea.estado || "pendiente",
        );

        const tareaCreada = await TareaRepository.crearTarea(NuevaTarea);

        return tareaCreada;
    }

    static async obtenerTareasPorIdUsuario(id: number) {
        const tareas = await TareaRepository.obtenerTareasPorIdUsuario(id);
        return tareas;
    }
}

export default TareaService;