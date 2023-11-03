import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/monumentos.ts";

const addCliente = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, codigo_postal, ISO } = req.body;
    if (!nombre) {
      res.status(400).send("Name and cif are required");
      return;
    }

    const alreadyExists = await ClienteModel.findOne({ nombre, codigo_postal }).exec();
    if (alreadyExists) {
      res.status(400).send("Monumento ya añadido");
      return;
    }

    const newCliente = new ClienteModel({ nombre, descripcion, codigo_postal, ISO });
    await newCliente.save();

    res.status(200).send({
      nombre: newCliente.nombre,
      descripcion: newCliente.descripcion,
      codigo_postal: newCliente.codigo_postal,
      ISO: newCliente.ISO,
      id: newCliente._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addCliente;
