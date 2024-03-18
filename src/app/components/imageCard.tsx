import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function ImageCard({
  base64,
  nombre,
  edad,
}: {
  base64: string;
  nombre: string;
  edad: number;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none shadow-xl shadow-gray-900  bg-black/20 before:bg-black/10 after:bg-black/10 before:rounded-xl rounded-large after:rounded-xl  "
    >
      <Image
        alt="Woman listing to music"
        className="object-cover w-[300px] shadow-xl shadow-gray-900  "
        src={`data:image/png;base64,${base64}`}
      />
      <CardFooter
        className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10
      shadow-xl shadow-gray-900  bg-black/20 before:bg-black/10 after:bg-black/10 before:rounded-xl rounded-large after:rounded-xl  
      "
      >
        <p className="text-tiny text-white/80">{nombre}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          {edad}
        </Button>
      </CardFooter>
    </Card>
  );
}
