"use client";

import Link from "next/link";

export default function Header() {

  return (
    <header className="w-full bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Invitarte
        </Link>
      </nav>
    </header>
  );
}
