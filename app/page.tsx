"use client";
import Image from "next/image";
import { Menu, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HEADER */}
      <header className="bg-[#0056A9] text-white px-5 py-4">
        <div className="max-w-screen-xl mx-auto w-full">
          {/* ✏️ MÓVIL: Fila 1 - Logo y menú hamburguesa */}
          <div className="flex justify-between items-center mb-4 sm:hidden">
            <Image
              src="/assets/images/emapat-logo.png"
              alt="EMAPAT Logo"
              width={150}
              height={40}
              priority
            />
            <button>
              <Menu size={28} />
            </button>
          </div>

          {/* ✏️ MÓVIL: Fila 2 - 4 iconos en línea */}
          <nav className="flex sm:hidden justify-around items-start gap-3 text-center">
            <div className="flex flex-col items-center">
              <Image 
                src='/assets/images/home.webp' 
                alt="Inicio" 
                width={32} 
                height={32}
                priority
              /> 
              <p className="text-center text-[10px] mt-1">Inicio</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src='/assets/images/receipt.webp' 
                alt="Recibo" 
                width={32} 
                height={32}
                priority
              /> 
              <p className="text-center text-[10px] leading-tight mt-1">Ver mi<br />Recibo</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src='/assets/images/yape.webp' 
                alt="Yape" 
                width={32} 
                height={32}
                priority
              /> 
              <p className="text-center text-[10px] leading-tight mt-1">Pagar con<br />YAPE</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src='/assets/images/call.webp' 
                alt="Llamar" 
                width={32} 
                height={32}
                priority
              /> 
              <span className="text-[10px] leading-tight mt-1">Llámanos</span>
            </div>
          </nav>

          {/* ✏️ DESKTOP: Logo (izq) → 3 iconos (centro) → Llámanos (der) */}
          <div className="hidden sm:flex flex-row justify-between items-center gap-8">
            {/* Logo a la izquierda */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/assets/images/emapat-logo.png"
                alt="EMAPAT Logo"
                width={200}
                height={53}
                priority
              />
              <h1 className="sr-only">EPS EMAPAT S.A.</h1>
            </div>

            {/* ✏️ CAMBIO: 3 iconos centrados con espaciado uniforme */}
            <nav className="flex justify-center items-start text-center flex-1">
              <div className="flex justify-center items-start gap-2">
                <div className="flex flex-col items-center w-20">
                  <Image 
                    src='/assets/images/home.webp' 
                    alt="Inicio" 
                    width={32} 
                    height={32}
                    priority
                  /> 
                  <p className="text-center text-sm mt-1">Inicio</p>
                </div>
                <div className="flex flex-col items-center w-20">
                  <Image 
                    src='/assets/images/receipt.webp' 
                    alt="Recibo" 
                    width={32} 
                    height={32}
                    priority
                  /> 
                  <p className="text-center text-sm leading-tight mt-1">Ver mi<br />Recibo</p>
                </div>
                <div className="flex flex-col items-center w-20">
                  <Image 
                    src='/assets/images/yape.webp' 
                    alt="Yape" 
                    width={32} 
                    height={32}
                    priority
                  /> 
                  <p className="text-center text-sm leading-tight mt-1">Pagar con<br />YAPE</p>
                </div>
              </div>
            </nav>

            {/* Llámanos a la derecha */}
            <div className="flex flex-col items-center flex-shrink-0">
              <Image 
                src='/assets/images/call.webp' 
                alt="Llamar" 
                width={32} 
                height={32}
                priority
              /> 
              <span className="text-sm leading-tight mt-1">Llámanos</span>
              <span className="text-xs font-semibold">987 654321</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-col items-center px-5 py-6 sm:px-8 sm:flex-row sm:justify-between sm:items-start gap-8 max-w-screen-xl mx-auto">
        {/* Tarjeta de contacto */}
        <section className="w-full sm:w-[480px] rounded-2xl shadow-md overflow-hidden bg-gradient-to-r from-cyan-600 to-green-400 text-white p-6 flex items-center">
          <Image
            src="/soporte.jpg"
            alt="Atención al cliente"
            width={90}
            height={90}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Llámanos a nuestro</h2>
            <p className="text-xs uppercase mb-2">Lunes a Domingo — 6am a 10pm</p>
            <ul className="text-sm space-y-1">
              <li>📱 948 328269</li>
              <li>📱 948 326346</li>
              <li>☎️ 082 624202</li>
              <li>☎️ 082 624203</li>
            </ul>
          </div>
        </section>

        {/* Comunicados */}
        <section className="w-full sm:w-[360px]">
          <div className="rounded-xl border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
              <MessageSquare size={20} /> Comunicados
            </h3>
            <p className="text-sm text-gray-500 mb-2">Cortes de servicio</p>
            {[
              { dia: "Viernes", fecha: "17-OCT-2025", hora: "7:00am", recon: "4:00pm" },
              { dia: "Sábado", fecha: "11-OCT-2025", hora: "11:20am", recon: "1:00pm" },
              { dia: "Jueves", fecha: "09-OCT-2025", hora: "10:00am", recon: "12:00pm" },
            ].map((item, idx) => (
              <div key={idx} className="text-sm border-t border-gray-100 py-2">
                <p><b>Día:</b> {item.dia}</p>
                <p><b>Fecha:</b> {item.fecha}</p>
                <p><b>Hora corte:</b> {item.hora}</p>
                <p><b>Reconexión:</b> {item.recon}</p>
                <button className="mt-1 text-blue-600 hover:underline">Ver detalles</button>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <h3 className="font-semibold mb-2">Estado del servicio de agua</h3>
            <p className="text-sm mb-2">
              Toda la ciudad de{" "}
              <span className="font-semibold underline">
                PUERTO MALDONADO Y EL TRIUNFO
              </span>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                <span className="text-sm font-medium">SIN SERVICIO</span>
              </div>
              <button className="text-blue-600 hover:underline text-sm">Ver detalles</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}