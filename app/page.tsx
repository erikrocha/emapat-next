import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1d63dc] flex flex-col items-center justify-center">
      <Image
        src="/assets/images/emapat-logo.png"
        alt="EMAPAT S.A."
        width={120}
        height={40}
        className="w-auto h-auto object-contain"
        priority
      />
      <h1 className="text-white text-3xl font-bold mt-6 mb-8">
        Gerencia de Comercialización
      </h1>

      <Link
        href="/precios/servicios"
        className="bg-white text-[#1d63dc] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
      >
        Simulador de Tarifas
      </Link>
      <div className="absolute bottom-12 right-12">
        <Image
          src="/assets/images/creado-por.webp"
          alt="Created by Avisos Center"
          width={100}
          height={30}
          className="w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}