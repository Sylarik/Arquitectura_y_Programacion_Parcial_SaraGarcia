export enum RAZAS {
  Humanos = "Humanos",
  Elfos = "Elfos"
}


export type Personaje = {
  nombre: string;
  raza: RAZAS;
  descripcion: string;
  habilidades: string
};



