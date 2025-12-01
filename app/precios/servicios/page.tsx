"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
        {
            id: 2,
            title: "Instalación nueva de servicio de agua y desague",
            type: "new_service",
        },
        {
            id: 3,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
        {
            id: 4,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
        {
            id: 5,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
        {
            id: 6,
            title: "Instalación nueva de servicio de agua y desague",
            type: "new_service",
        },
        {
            id: 7,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
        {
            id: 8,
            title: "Servicio de Agua y Desague con la nueva tarifa de precios.",
            type: "installation",
        },
    ];

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
            <main className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-12">
                    Selecciona un servicio
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) =>
                        service.id === 1 ? (
                            <Link href="/precios/servicios/agua-desague" key={service.id}>
                                <div className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:bg-[#1d63dc] transition-all duration-300 cursor-pointer flex flex-col justify-between h-48 shadow-sm hover:shadow-md">
                                    <p className="text-gray-600 font-medium group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </p>
                                    <div className="self-end">
                                        <div className="w-8 h-8 rounded-full bg-[#1d63dc] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                            <Plus className="w-5 h-5 text-white group-hover:text-[#1d63dc] transition-colors duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={service.id}
                                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:bg-[#1d63dc] transition-all duration-300 cursor-pointer flex flex-col justify-between h-48 shadow-sm hover:shadow-md"
                            >
                                <p className="text-gray-600 font-medium group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </p>
                                <div className="self-end">
                                    <div className="w-8 h-8 rounded-full bg-[#1d63dc] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                        <Plus className="w-5 h-5 text-white group-hover:text-[#1d63dc] transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </main>
        </div>
    );
}
