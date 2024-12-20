import prisma from 'src/prisma/client';
import TareaModel from '@models/TareaModel';

class TareaRepository {
    static async crearTarea(tarea: TareaModel): Promise<TareaModel> {
        const NuevaTarea = await prisma.tareas.create({
            data: {
                titulo: tarea.titulo,
                contenido: tarea.contenido,
                fechaVencimiento: tarea.fechaVencimiento,
                idUsuario: tarea.idUsuario
            }
        })

        return {
            id: NuevaTarea.id,
            titulo: NuevaTarea.titulo,
            contenido: NuevaTarea.contenido,
            fechaCreacion: NuevaTarea.fechaCreado || formatZonaHoraria(new Date()),
            fechaVencimiento: NuevaTarea.fechaVencimiento,
            idUsuario: NuevaTarea.idUsuario
        };
    }
    static async obtenerTareasPorIdUsuario(id: number): Promise<TareaModel[]> {
        const tareas = await prisma.tareas.findMany(
            {
                where: {
                    idUsuario: id
                }
            }
        );
        return tareas.map(tarea => {

            return {
                id: tarea.id,
                titulo: tarea.titulo,
                contenido: tarea.contenido,
                fechaCreacion: tarea.fechaCreado || formatZonaHoraria(new Date()),
                fechaVencimiento: tarea.fechaVencimiento,
                idUsuario: tarea.idUsuario
            }
        });
    }

    static async updateTarea(tarea: TareaModel, idTarea: number): Promise<TareaModel> {
        const tareaActualizada = await prisma.tareas.update({
            where: {
                id: idTarea
            },
            data: {
                titulo: tarea.titulo,
                contenido: tarea.contenido,
                fechaVencimiento: tarea.fechaVencimiento
            }
        });

        return {
            id: tareaActualizada.id,
            titulo: tareaActualizada.titulo,
            contenido: tareaActualizada.contenido,
            fechaCreacion: formatZonaHoraria(tareaActualizada.fechaCreado),
            fechaVencimiento: tareaActualizada.fechaVencimiento,
            idUsuario: tareaActualizada.idUsuario
        };
    }

    static async eliminarTarea(id: number): Promise<TareaModel> {
        const tareaEliminada = await prisma.tareas.delete({
            where: {
                id: id
            }
        });

        return {
            id: tareaEliminada.id,
            titulo: tareaEliminada.titulo,
            contenido: tareaEliminada.contenido,
            fechaCreacion: formatZonaHoraria(tareaEliminada.fechaCreado),
            fechaVencimiento: tareaEliminada.fechaVencimiento,
            idUsuario: tareaEliminada.idUsuario
        };
    }
}

function formatZonaHoraria(fecha: Date) {
    fecha.setHours(fecha.getHours() - 4);
    return fecha;
}
export default TareaRepository;