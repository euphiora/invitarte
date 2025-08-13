import { Feature } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Corazon, Mensaje, Reloj } from "@/components/Iconos";

export default async function Home() {
  const features = [
    {
      icon: <Corazon size={56} color="#9AD2E1" />,
      title: "Diseños Únicos Y Con Amor",
      description:
        "Cada pieza está pensada para que se sienta especial y hecha a medida. Nada de plantillas genéricas.",
    },
    {
      icon: <Reloj size={56} color="#9AD2E1" />,
      title: "Entrega Rápida Y Fácil",
      description:
        "Descargá tus archivos directo a tu celular o computadora. Sin demoras ni complicaciones.",
    },
    {
      icon: <Mensaje size={56} color="#9AD2E1" />,
      title: "Te Acompañamos En Todo",
      description:
        "¿Querés imprimir en casa? Te damos tutoriales y te guiamos paso a paso para que quede perfecto.",
    },
  ];

  const productos = [
    {
      name: "Invitación Boda Floral Celeste",
      imageUrl: "/images/producto1.png",
    },
    {
      name: "Invitación Cumpleaños Rosa",
      imageUrl: "/images/producto1.png",
    },
    {
      name: "Invitación Cumpleaños Rosa",
      imageUrl: "/images/producto1.png",
    },
    {
      name: "Invitación Cumpleaños Rosa",
      imageUrl: "/images/producto1.png",
    },
    {
      name: "Invitación Cumpleaños Rosa",
      imageUrl: "/images/producto1.png",
    },
    {
      name: "Invitación Cumpleaños Rosa",
      imageUrl: "/images/producto1.png",
    },
  ];
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
                <Link href="productos">Ver productos</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="comocomprar">¿Cómo comprar?</Link>
              </Button>
            </div>
          </div>
          <div className="w-80 h-80 flex items-center justify-center order-first md:order-last">
            <img
              src="/banner.png"
            />
          </div>
        </div>
      </div>
      <section id="productos" className="py-16 px-6 bg-[#fff4f2]">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-4xl mb-6">Productos destacados</h2>
          <p className="mt-6 mb-6 text-lg sm:text-xl leading-relaxed text-[#252B42] max-w-mdo">
            Ya sea un cumpleaños, una boda o una fiesta importante, que sea tu
            encuentro perfecto. Vamos a crear para combinar tu propósito,
            nuestro con amor y un compromiso.
          </p>
          <div className="flex flex-wrap justify-center flex-col content-center sm:flex-row gap-8 md:gap-12">
            {productos.map((producto, i) => (
              <Card key={i} className="border-0 shadow-lg max-w-60">
                <CardContent className="p-6">
                  <div className="w-full h-w bg-[#d9d9d9] rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={producto.imageUrl}
                      alt={producto.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-[#252b42] mb-5 font-semibold text-center">
                    {producto.name}
                  </h3>
                  <Button asChild variant="default">
                    <Link href="">Personalizar</Link>
                  </Button>
                </CardContent>
              </Card>
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
              <div className="w-80 h-80 bg-[#d9d9d9] rounded-full flex items-center justify-center">
                <img src="/" className="w-64 h-64 object-cover rounded-full" />
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
              <Link href="https://wa.me/+5493447542735">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
