import { differenceInYears, subYears } from "date-fns";

export type PersonaType = {
  cedula: string;
  nombre: string;
  lugarNacimiento: string;
  fechaNacimiento: Date;
  categoria: string;
  municipio: string;
  provincia: string;
  sexo: string;
  estadoCivil: string;
  ocupacion: string;
  nacionalidad: string;
  sector: string;
  colegio: string;
  causaCancelacion: null;
  imagen: string;
  edad?: number;
};
