import { Request, Response } from "npm:express@4.18.2";
import MonumentoIdModel from "../db/monumentos.ts";

const getMonumentoId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;  //es lo que pones depues para bscar en google
    const Monumento = await MonumentoIdModel.findOne({_id: id}).exec();
    if (!Monumento) {
        res.status(404).send("Monumento no encontrado");
        return;
    }

    res.status(200).send({
        nombre: Monumento.nombre,
        descripcion: Monumento.descripcion,
        codigo_postal: Monumento.codigo_postal,
        ISO: Monumento.ISO,
        id: Monumento._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMonumentoId;