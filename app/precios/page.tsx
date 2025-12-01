"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-[#1d63dc] py-4 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/assets/images/emapat-logo.png"
            alt="EMAPAT S.A."
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 leading-tight">
              Bienvenido a la calculadora
              <br />
              de precios de EMAPAT S.A.
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-600">
                Empieza una simulación de precios
              </h2>
              <p className="text-gray-500 max-w-md">
                Agrega y simula productos y/o servicios para obtener una estimación de
                costos.
              </p>
            </div>

            <Link href="/precios/servicios">
              <button className="bg-[#1d63dc] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center gap-2 transition-colors">
                <Plus className="w-5 h-5" />
                Nueva Simulación
              </button>
            </Link>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/images/img_1.jpg"
              alt="Ilustración de equipo"
              width={600}
              height={400}
              className="w-full max-w-lg object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
