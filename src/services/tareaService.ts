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

    static async actualizarTarea(tarea: TareaModel, idTarea: number) {
        const tareaActualizada = await TareaRepository.updateTarea(tarea, idTarea);
        return tareaActualizada;
    }

    static async eliminarTarea(id: number) {
        const tareaEliminada = await TareaRepository.eliminarTarea(id);
        return tareaEliminada;
    }
}
// zona horaria bolivia
// DD-MM-YYYYT20:00:00.000Z

export default TareaService;