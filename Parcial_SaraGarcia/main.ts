import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";


import addPersonaje from "./resolvers/addPersonaje.ts";
import getPersonaje from "./resolvers/getPersonajes.ts";
import getPersonajeId from "./resolvers/getPersonajesId.ts";
import deletePersonaje from "./resolvers/deletePersonaje.ts";
import updatePersonaje from "./resolvers/updatePersonaje.ts";


import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //1-> busca en env /2-> archivo del sistema
const PORT = env.PORT || Deno.env.get("PORT") || 3010;
//const MONGO_URL = "mongodb+srv://sgarciag18:123@cluster0.f9boxcy.mongodb.net/tierra_media?retryWrites=true&w=majority"

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

try{
  await mongoose.connect(MONGO_URL);
  console.info("Mongo connected");

  const app = express();
  app.use(express.json());

  app
  .get("/api/tierramedia/personajes", getPersonaje) //--
  .get("/api/tierramedia/personajes/:id", getPersonajeId)
  
  .post("/api/tierramedia/personajes", addPersonaje) //--
  .delete("/api/tierramedia/personajes/:id", deletePersonaje)
  .put( "/api/tierramedia/personajes/:id", updatePersonaje)

app.listen(PORT, () => {
  console.log("Server listening on port 3000");

});
}catch(e){
  console.error(e)
}




