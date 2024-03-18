"use client";
import { PersonaType } from "@/utils/types";
import { Button, Input } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { format } from "date-fns";
import { enGB, eo, ru, es } from "date-fns/locale";
import ImageCard from "./imageCard";
import View from "./view";

export default function Form() {
  //40225322680
  //00103901823

  const [cedula, setCedula] = useState("");
  const [persona, setPersona] = useState<PersonaType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const cedula = e.currentTarget.cedula.value;
    const url = `http://c55d0bccabd3.sn.mynetname.net:8008/codulacionapi/v1/padron?cedula=${cedula}`;

    const t = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: PersonaType) => {
        setPersona(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className=" mt-20 gap-10">
      <form
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
        className="flex flex-col items-center justify-center "
      >
        <div className="flex flex-col gap-4 items-center justify-center  ">
          <Input
            className="w-[300px]"
            type="text"
            placeholder="Cédula"
            name="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
            autoComplete="off"
            disabled={loading}
            isRequired
            endContent={
              <div className="flex items-center">
                <label className="sr-only" htmlFor="currency">
                  Busqueda
                </label>
                <select
                  className="outline-none border-0 bg-transparent text-default-400 text-small"
                  id="currency"
                  name="currency"
                >
                  <option>Cedula</option>
                  <option>Nombres</option>
                  <option>Sector</option>
                </select>
              </div>
            }
          />

          <Button type="submit" color="primary" isLoading={loading}>
            Buscar
          </Button>
        </div>
      </form>
      <section className="mt-10">
        {persona && <View persona={persona} />}
      </section>
    </main>
  );
}
