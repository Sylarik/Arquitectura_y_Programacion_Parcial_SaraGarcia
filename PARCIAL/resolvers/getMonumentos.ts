import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/monumentos.ts";

const getMonumento = async (req: Request, res: Response) => {
  try {
    const monumentos = await MonumentoModel.find().exec();
    
    res.status(200).send(monumentos);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMonumento;
