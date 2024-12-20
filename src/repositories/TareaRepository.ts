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
            fechaCreacion: NuevaTarea.fechaCreado,
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
                fechaCreacion: tarea.fechaCreado,
                fechaVencimiento: tarea.fechaVencimiento,
                idUsuario: tarea.idUsuario
            }
        });
    }

}

export default TareaRepository;