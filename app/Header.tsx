"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-accent shadow-md py-4 px-8 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold text-gray-800 transition-colors"
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={100}
          width={100}
        />
      </Link>

      <div className="flex gap-3">
        <a href="#" className="hover:text-gray-900">
          Home
        </a>
        <a href="#" className="hover:text-gray-900">
          Productos
        </a>
        <a href="#" className="hover:text-gray-900">
          Cómo comprar
        </a>
        <a href="#" className="hover:text-gray-900">
          Contacto
        </a>
      </div>
    </header>
  );
}
