"use client";

import { Feature } from "@/components/Features";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Corazon, Mensaje, Reloj } from "@/components/Iconos";
import { CategoryList } from "@/components/Categoria";
import { useState } from "react";
import { CategoriaType, FeatureType } from "@/types";
import { Producto } from "@/components/Producto";
import { CATEGORIAS, LINK_WHATSAPP, PRODUCTOS } from "@/lib/constants";


const features: FeatureType[] = [
  {
    icon: <Corazon size={56} color="#7AA2A2" />,
    title: "Diseños Únicos Y Con Amor",
    description:
      "Cada pieza está pensada para que se sienta especial y hecha a medida. Nada de plantillas genéricas.",
  },
  {
    icon: <Reloj size={56} color="#7AA2A2" />,
    title: "Entrega Rápida Y Fácil",
    description:
      "Descargá tus archivos directo a tu celular o computadora. Sin demoras ni complicaciones.",
  },
  {
    icon: <Mensaje size={56} color="#7AA2A2" />,
    title: "Te Acompañamos En Todo",
    description:
      "¿Querés imprimir en casa? Te damos tutoriales y te guiamos paso a paso para que quede perfecto.",
  },
];

export default function Home() {
  const [categories, setCategories] = useState<CategoriaType[]>(CATEGORIAS);
  const selectedCategory = categories.find((category) => category.isSelected);

  const onCategorySelected = (categoryId: number | undefined) => {
    if (!categoryId) {
      setCategories((prevCategories) => {
        prevCategories.forEach((category) => {
          category.isSelected = false;
        });
        return [...prevCategories];
      });
      return;
    }

    setCategories((prevCategories) => {
      prevCategories.forEach((category) => {
        category.isSelected = category.id === categoryId;
      });
      return [...prevCategories];
    });
  };

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-14 py-20">
        <div className="mx-auto lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="">
            <h2 className="flex flex-col text-5xl sm:text-7xl text-[#252B42]">
              <span>Bienvenido</span>
              <span>a Invitarte</span>
            </h2>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#252B42] max-w-md">
              Creamos experiencias digitales únicas para transformar cada
              momento en algo inolvidable.
            </p>
            <div className=" mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
              <Button asChild variant="default">
                <Link href="#productos">Ver productos</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#comocomprar">¿Cómo comprar?</Link>
              </Button>
            </div>
          </div>
          <div className="w-80 h-80 flex items-center justify-center order-first md:order-last">
            <img src="/banner3.png" />
          </div>
        </div>
      </div>
      <section id="productos" className="py-16 px-6 bg-[#fffaf4]">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-4xl mb-6">Productos destacados</h2>
          <p className="mt-6 mb-6 text-lg sm:text-xl leading-relaxed text-[#252B42] max-w-mdo">
            Ya sea un cumpleaños, una boda o una fiesta importante, que sea tu
            encuentro perfecto. Vamos a crear para combinar tu propósito,
            nuestro con amor y un compromiso.
          </p>
          <CategoryList
            categories={categories}
            onCategorySelected={onCategorySelected}
          />
          <div className="flex flex-wrap justify-center flex-col content-center sm:flex-row gap-8 md:gap-12 py-4">
            {PRODUCTOS
              .filter((producto) =>
                selectedCategory
                  ? producto.categoryId === selectedCategory.id
                  : true
              )
              .map((producto, i) => (
                <Producto key={i} producto={producto} />
              ))}
          </div>
        </div>
      </section>

      <section
        id="comocomprar"
        className="relative isolate overflow-hidden bg-white flex items-center justify-center"
      >
        <div className="mx-auto max-w-7xl px-14 py-20">
          <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="flex-flexcol text-5xl sm:text-4xl mb-6 ">
                ¿Cómo comprar?
              </h2>
              <p className="text-[#737373] text-lg max-w-md">
                Elegí tu diseño favorito, completá tus datos y recibí
                automáticamente tu pedido por WhatsApp. Lo único que tenés que
                hacer es enviarnos tu pedido y en 24 horas tenés tu invitación.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 flex items-center justify-center order-first md:order-last">
                <img src="/banner2.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros">
        <div className="w-full flex justify-center items-center py-16 bg-[#fff4f2]">
          <div className="flex flex-wrap justify-center flex-col md:flex-row gap-8 md:gap-12">
            {features.map((feature, indice) => (
              <Feature
                key={indice}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center  ">
          <h2 className="text-5xl sm:text-4xl mb-6">
            Empezá a celebrar con un click.
          </h2>
          <p className="text-[#737373] text-lg mb-8">
            Explorá nuestros numerosos diseños o recibimos directamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="#productos">Ver productos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
