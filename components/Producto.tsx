import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { FormularioProducto } from "./FormularioProducto";
import { useState } from "react";
import { ProductoType } from "@/types";

type Props = {
  producto: ProductoType;
};

export function Producto({ producto }: Props) {
  const [formStatus, setFormStatus] = useState({
    isOpen: false,
    key: 0,
  });
  const handleCloseForm = () => {
    setFormStatus((old) => ({ isOpen: false, key: old.key + 1 }));
  };

  const openForm = () => {
    setFormStatus((old) => ({ isOpen: true, key: old.key + 1 }));
  };

  return (
    <>
      <Card className="border-0 shadow-lg max-w-60">
        <CardContent className="p-6">
          <div className="w-full h-w bg-[#d9d9d9] rounded-lg mb-4 flex items-center justify-center">
            <Image
              src={producto.imageUrl}
              alt={producto.name}
              width={1500}
              height={1500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-[#252b42] mb-5 font-semibold text-center">
            {producto.name}
          </h3>
          <Button variant="default" onClick={openForm}>
            Personalizar
          </Button>
        </CardContent>
      </Card>
      <FormularioProducto
        key={formStatus.key}
        isOpen={formStatus.isOpen}
        onClose={handleCloseForm}
        producto={producto}
      />
    </>
  );
}
