import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/monumentos.ts";

const updateMonumento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, codigo_postal, ISO } = req.body;
    if (!nombre || !descripcion || !codigo_postal) {
      res.status(400).send("Se encesitan todos los requisitos");
      return;
    }

    const updatedMonumento = await MonumentoModel.findOneAndUpdate(
      { _id : id },
      { nombre, codigo_postal, descripcion, ISO },
      
      { new: true }
    ).exec();

    if (!updatedMonumento) {
      res.status(404).send("Persoanje no encontrado");
      return;
    }

    res.status(200).send({
      nombre: updatedMonumento.nombre,
      descripcion: updatedMonumento.descripcion,
      codigo_postal: updatedMonumento.codigo_postal,
      ISO: updatedMonumento.ISO,
      id: updatedMonumento._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateMonumento;