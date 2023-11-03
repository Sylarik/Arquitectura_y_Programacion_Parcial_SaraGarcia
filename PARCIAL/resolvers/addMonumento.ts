import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/monumentos.ts";
import { Monumento } from "../types.ts";

const addCliente = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, codigo_postal, ISO } = req.body;
    if (!nombre) {
      res.status(400).send("Name and cif are required");
      return;
    }

    const alreadyExists = await MonumentoModel.findOne({ nombre, codigo_postal }).exec();
    if (alreadyExists) {
      res.status(400).send("Monumento ya añadido");
      return;
    }
    
    //-----
    const response = await fetch(
      `https://zip-api.eu/api/v1/codes/postal_code=${ISO}-${codigo_postal}`
      );
    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);
      return;
    }
    const lugar = await response.json();
console.log(lugar);
    const state = lugar[0].state;
    
    //----------
   
    const newMonumento = new MonumentoModel({ nombre, descripcion, codigo_postal, ISO, state: state});
    await newMonumento.save();


    res.status(200).send({
      nombree: newMonumento.nombre,
      descripcion: newMonumento.descripcion,
      codigo_postal: newMonumento.codigo_postal,
      ISO: newMonumento.ISO,

      state: newMonumento.state,
      
      id: newMonumento._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addCliente;
