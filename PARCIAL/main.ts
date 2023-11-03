import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";




import addMonumento from "./resolvers/addMonumento.ts";
import getMonumento from "./resolvers/getMonumentos.ts";
import getMonumentoId from "./resolvers/getMonumentoId.ts";
import updateMonumento from "./resolvers/updateMonumento.ts";
import deleteMonumento from "./resolvers/deleteMonumento.ts";





import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
//import deleteMonumento from "./resolvers/deleteMonumento.ts";
const env = await load();

//const MONGO_URL = "mongodb+srv://sgarciag18:123@cluster0.f9boxcy.mongodb.net/monumentos?retryWrites=true&w=majority"

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //1-> busca en env /2-> archivo del sistema
const PORT = env.PORT || Deno.env.get("PORT") || 3008;



if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  

  .get("/api/monumentos", getMonumento) //--5
  .get("/api/monumentos/:id", getMonumentoId) //--5
  .post("/api/monumentos", addMonumento) //--4
  .put("/api/monumentos/:id", updateMonumento)
  .delete("/api/monumentos/:id", deleteMonumento) //--6

  

app.listen(PORT, () => {
  console.log("Server listening on port 3008");
});

function post(arg0: string,addInvoice: (req: Request,res: Response) => Promise<void>) {
  throw new Error("Function not implemented.");
}
