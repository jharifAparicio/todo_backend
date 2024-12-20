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
            const id = parseInt(req.params.id);
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
}

export default TareaController;