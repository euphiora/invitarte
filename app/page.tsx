import { Feature } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Corazon, Mensaje, Reloj } from "@/components/Iconos";

export default async function Home() {
  const features = [
    {
      icon: (
        <Corazon size={56} color="#9AD2E1" />
      ),
      title: 'Diseños Únicos Y Con Amor',
      description: 'Cada pieza está pensada para que se sienta especial y hecha a medida. Nada de plantillas genéricas.'
    },
    {
      icon: (
        <Reloj size={56} color="#9AD2E1" />
      ),
      title: 'Entrega Rápida Y Fácil',
      description: 'Descargá tus archivos directo a tu celular o computadora. Sin demoras ni complicaciones.'
    },
    {
      icon: (
        <Mensaje size={56} color="#9AD2E1" />
      ),
      title: 'Te Acompañamos En Todo',
      description: '¿Querés imprimir en casa? Te damos tutoriales y te guiamos paso a paso para que quede perfecto.'
    }
  ];

  const productos = [1, 2, 3];
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-14 py-20">
        <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-20">
          <div className="">
            <h2 className="flex flex-col text-5xl sm:text-7xl text-[#252B42]">
              <span>Bienvenido</span>
              <span>a Invitarte</span>
            </h2>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#252B42] max-w-md">
              Creamos experiencias digitales únicas para transformar cada momento
              en algo inolvidable.
            </p></div>
          <div className=""></div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
            <Button asChild variant="default">
              <Link href="#">Ver productos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#">¿Cómo comprar?</Link>
            </Button>
          </div>
        </div>
      </div>
      <section className="py-16 px-6 bg-[#F7F3EE]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#252b42] mb-4">
            Productos destacados
          </h2>
          <p className="mt-0 mb-5 text-lg sm:text-xl leading-relaxed text-[#252B42] max-w-mdo">
            Ya sea un cumpleaños, una boda o una fiesta importante, que sea tu encuentro perfecto. Vamos a crear para combinar tu propósito, nuestro con amor y un compromiso.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {productos.map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-[#d9d9d9] rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src="/"
                      alt={`Producto ${i}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-[#252b42] font-semibold text-center">
                    Producto {i}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-14 py-20">
          <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-20">
            <div>
              <h2 className="flex-flexcol text-4xl font-bold text-[#252b42] mb-6">
                ¿Cómo comprar?
              </h2>
              <p className="text-[#737373] text-lg max-w-md">
                Elegí tu diseño favorito, completá tus datos y recibí automáticamente tu pedido por WhatsApp. Lo único que tenés que hacer es enviarnos tu pedido y en 24 horas tenés tu invitación.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-[#d9d9d9] rounded-full flex items-center justify-center">
                <img
                  src="/"
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center py-16 bg-white">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {features.map((feature, indice) => (
            <Feature key={indice} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>    </div>
  );
}