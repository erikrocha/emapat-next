"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Settings, Play } from "lucide-react";

export default function WaterServicePage() {
    const [m3, setM3] = useState<string>("");
    const [total, setTotal] = useState<number | null>(null);
    const [serviceType, setServiceType] = useState<string>();
    const [category, setCategory] = useState<string>();

    const calculateTotal = () => {
        const c10 = Number(m3);
        let waterTotal = 0;
        let sewageTotal = 0;

        if (category === "Comercial") {
            // Logic for Commercial
            // Range 0-30: 6.22 (Water), 2.83 (Sewage)
            // Range 30+: 8.37 (Water), 3.81 (Sewage)

            const range1 = Math.min(c10, 30);
            const range2 = Math.max(c10 - 30, 0);

            waterTotal = (range1 * 6.22) + (range2 * 8.37);
            sewageTotal = (range1 * 2.83) + (range2 * 3.81);

        } else if (category === "Industrial") {
            // Logic for Industrial
            // Range 0-100: Price TBD
            // Range 100+: Price TBD

            const range1 = Math.min(c10, 100);
            const range2 = Math.max(c10 - 100, 0);

            // Placeholder prices (0) as they were not provided
            waterTotal = (range1 * 0) + (range2 * 0);
            sewageTotal = (range1 * 0) + (range2 * 0);

        } else if (category === "Estatal") {
            // Logic for Estatal
            // Range 0-60: Price TBD
            // Range 60+: Price TBD

            const range1 = Math.min(c10, 60);
            const range2 = Math.max(c10 - 60, 0);

            // Placeholder prices (0) as they were not provided
            waterTotal = (range1 * 0) + (range2 * 0);
            sewageTotal = (range1 * 0) + (range2 * 0);

        } else if (category === "Social") {
            // Logic for Social
            // Flat rate
            // Water: 2.64
            // Sewage: 1.11

            waterTotal = c10 * 2.64;
            sewageTotal = c10 * 1.11;

        } else {
            // Logic for Doméstico (Default)
            // C7 = MIN(C10, 8)
            const c7 = Math.min(c10, 8);

            // C8 = MIN(MAX(C10-C7, 0), 10)
            const c8 = Math.min(Math.max(c10 - c7, 0), 10);

            // C9 = MAX(C10-C7-C8, 0)
            const c9 = Math.max(c10 - c7 - c8, 0);

            // Water Calculation
            // Range 0-8: 2.64
            // Range 8-18: 3.2
            // Range 18+: 6.22
            waterTotal = c7 * 2.64 + c8 * 3.2 + c9 * 6.22;

            // Sewage Calculation
            // Range 0-8: 1.11
            // Range 8-18: 1.45
            // Range 18+: 2.83
            sewageTotal = c7 * 1.11 + c8 * 1.45 + c9 * 2.83;
        }

        // Fixed Cost
        const fixedCost = 5.3;

        // Total
        let finalTotal = 0;

        if (serviceType === "Agua") {
            finalTotal = waterTotal + fixedCost;
        } else if (serviceType === "Desague") {
            finalTotal = sewageTotal + fixedCost;
        } else {
            // Agua y Desague (Default)
            finalTotal = waterTotal + sewageTotal + fixedCost;
        }

        setTotal(finalTotal);
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Form */}
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                        <h1 className="text-3xl font-bold text-gray-700 mb-8">
                            Servicio: Agua y Desague
                        </h1>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">
                                    Categoría
                                </label>
                                <div className="relative">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">-- Seleccione --</option>
                                        <option value="Doméstico">Doméstico</option>
                                        <option value="Comercial">Comercial</option>
                                        <option value="Social">Social</option>
                                        <option value="Industrial">Industrial</option>
                                        <option value="Estatal">Estatal</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">
                                    Tipo de Servicio
                                </label>
                                <div className="relative">
                                    <select
                                        value={serviceType}
                                        onChange={(e) => setServiceType(e.target.value)}
                                        className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="Social">-- Seleccione --</option>
                                        <option value="Agua y Desague">Agua y Desague</option>
                                        <option value="Agua">Agua</option>
                                        <option value="Desague">Desague</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">
                                    M3
                                </label>
                                <input
                                    type="number"
                                    value={m3}
                                    onChange={(e) => setM3(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <button
                                onClick={calculateTotal}
                                className="w-full sm:w-auto bg-[#1d63dc] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors mt-4"
                            >
                                <div className="bg-white/20 p-1 rounded-full">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Correr simulación
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-fit">
                        <div className="p-8 border-b border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-700 text-center">
                                Detalles
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-gray-600 font-medium text-lg">
                                    Agua y Desague
                                </span>
                                <span className="text-gray-700 font-bold text-4xl">
                                    {total !== null ? `S/ ${total.toFixed(2)}` : "S/ 0.00"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">{m3 || 0} m3</span>
                                <Settings className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
