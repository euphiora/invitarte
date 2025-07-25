import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="flex text-5xl font-semibold sm:text-7xl flex-col">
            <span>Bienvenido</span> <span>a Invitarte</span>
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            Diseñamos detalles digitales listos para hacer de cada momento algo
            especial.
          </p>
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
    </div>
  );
}