import { Request, Response } from "express";
import TareaService from "@services/tareaService";
import TareaModel from "@models/TareaModel";

class TareaController {
    static async crearTarea(req: Request, res: Response) {
        try {
            const tarea = req.body as TareaModel;
            const tareaCreada = await TareaService.crearTarea(tarea);
            res.status(201).json({
                tarea: tareaCreada,
                'status': 201
            });
        } catch (error) {
            res.status(400).json({
                message: " " + error,
            })
        }
    }

    static async obtenerTareasPorIdUsuario(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.idUsuario);
            const tareas = await TareaService.obtenerTareasPorIdUsuario(id);
            res.status(200).json({
                tareas: tareas,
                'status': 200
            });
        } catch (error) {
            res.status(400).json({
                message: " " + error,
            })
        }
    }

    static async actualizarTarea(req: Request, res: Response) {
        try {
            const idTarea = parseInt(req.params.id);
            const tarea = req.body as TareaModel;
            const tareaActualizada = await TareaService.actualizarTarea(tarea, idTarea);
            res.status(200).json({
                tarea: tareaActualizada,
                'status': 200
            });
        } catch (error) {
            res.status(400).json({
                message: " " + error,
            })
        }
    }

    static async eliminarTarea(req: Request, res: Response) {
        try {
            const idTarea = parseInt(req.params.id);
            await TareaService.eliminarTarea(idTarea);
            res.status(200).json({
                message: "Tarea eliminada",
                status: 200
            });
        } catch (error) {
            res.status(400).json({
                message: " " + error,
            })
        }
    }
}

export default TareaController;