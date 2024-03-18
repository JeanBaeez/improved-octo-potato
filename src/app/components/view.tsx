import { PersonaType } from "@/utils/types";
import ImageCard from "./imageCard";
import getpersonaYears from "@/utils/functions";

export default function View({ persona }: { persona: PersonaType }) {
  persona.edad = getpersonaYears(persona.fechaNacimiento);
  return (
    <section className=" ">
      <div className="   flex max-sm:block    container mx-auto  gap-10  ">
        <div className="flex justify-center ">
          <ImageCard
            base64={persona.imagen}
            nombre={persona.nombre}
            edad={persona.edad}
          />
        </div>

        <div className="justify-center max-sm:p-10   mx-auto items-center flex flex-col gap-10 max-sm:mt-10 text-wrap">
          <div className="flex items-baseline gap-1">
            <p className="text-3xl font-bold ">{persona.nombre}</p>
            <p>{persona.edad && ` (${persona.edad} años)`}</p>
          </div>
          <div className="flex flex-col gap-1  ">
            <ul className="flex flex-col gap-1">
              <div className="flex gap-2   items-center">
                <p className="text-medium">Lugar de Nacimiento: </p>
                <p className="text-medium font-bold">
                  {persona.lugarNacimiento}
                </p>
              </div>
              <div className="flex  gap-2  items-center">
                <p className="text-medium">Municipio: </p>
                <p className="text-medium font-bold">{persona.municipio}</p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium">Nacionalidad:</p>
                <p className="text-medium font-bold">{persona.nacionalidad}</p>
              </div>
              <div className="flex  gap-2 items-center">
                <p className="text-medium">Categoria:</p>
                <p className="text-medium font-bold">{persona.categoria}</p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium">Sector:</p>
                <p className="text-medium  font-bold">{persona.sector}</p>
              </div>

              <div className="flex gap-2  items-center">
                <p className="text-medium">Provincia:</p>
                <p className="text-medium  font-bold">{persona.provincia}</p>
              </div>

              <div className="flex gap-2  items-center">
                <p className="text-medium">Colegio:</p>
                <p className="text-medium  font-bold">{persona.colegio}</p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium">Sexo:</p>
                <p className="text-medium font-bold">{persona.sexo}</p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium"> Estado Civil:</p>
                <p className="text-medium font-bold">{persona.estadoCivil}</p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium">Causa de Cancelacion:</p>
                <p className="text-medium font-bold">
                  {persona.causaCancelacion}
                </p>
              </div>
              <div className="flex gap-2  items-center">
                <p className="text-medium">Ocupacion: </p>
                <p className="text-medium font-bold">{persona.ocupacion}</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
