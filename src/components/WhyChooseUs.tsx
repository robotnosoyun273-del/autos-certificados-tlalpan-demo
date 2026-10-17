"use client";

import React from "react";
import { 
  Award, 
  ShieldCheck, 
  CalendarClock, 
  Landmark, 
  Repeat, 
  Wrench,
  CheckCircle2
} from "lucide-react";
import { businessInfo } from "@/data/inventory";

const pillars = [
  {
    icon: Award,
    title: "Socio Activo ANCA",
    subtitle: "Asociación Nacional de Comerciantes en Automóviles",
    desc: "Operamos bajo el estricto código de ética de ANCA. Cada vehículo cuenta con validación jurídica completa, sin reporte de robo, adeudos ni alteraciones.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía Mecánica por Escrito",
    subtitle: "Tranquilidad total desde el día 1",
    desc: "No vendemos palabras. Tu compra queda protegida con garantía formal en motor y transmisión por escrito en contrato.",
  },
  {
    icon: CalendarClock,
    title: "Más de 20 Años en Calzada de Tlalpan",
    subtitle: "Establecimiento físico formal en Coyoacán",
    desc: "Dos décadas de experiencia consolidada en el mismo punto de la CDMX. No somos revendedores improvisados ni operamos en puntos de riesgo.",
  },
  {
    icon: Landmark,
    title: "Crédito con Bancos de Primer Nivel",
    subtitle: "Scotiabank, Banorte, BBVA y Santander",
    desc: "Tramitamos tu crédito automotriz con las instituciones financieras más sólidas de México. Enganches desde el 20% y plazos de 12 a 60 meses.",
  },
  {
    icon: Repeat,
    title: "Aceptamos Tu Auto a Cuenta",
    subtitle: "Máxima valuación de mercado",
    desc: "Deja tu vehículo actual como parte del enganche y llévate tu seminuevo el mismo día con liquidación ágil y segura.",
  },
  {
    icon: Wrench,
    title: "Revisión Multidisciplinaria",
    subtitle: "Diagnóstico por escáner OBD2",
    desc: "Inspeccionamos suspensión, frenos, compresión de motor, sistemas eléctricos e interiores para asegurar unidades en óptimas condiciones.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="por-que-nosotros" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#991B1B]" />
            <span>Por Qué Elegirnos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            La Manera Más Segura de Comprar un Seminuevo en CDMX
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            En un mercado con riesgos e informalidad, en Autos Certificados Tlalpan te respaldamos con legalidad absoluta y garantía por escrito.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-7 hover:border-red-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded bg-[#242021] text-[#EF4444] flex items-center justify-center border border-slate-700 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                      {p.title}
                    </h3>
                    <span className="text-xs font-bold text-[#991B1B] block mt-0.5">
                      {p.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certificado en contrato</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ANCA Assurance Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#242021] rounded-lg text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded bg-[#1C1E23] border border-red-500/40 text-[#EF4444] flex items-center justify-center shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Socio Activo de ANCA México
              </h4>
              <p className="text-xs text-slate-300 max-w-xl mt-0.5">
                Puedes validar nuestra afiliación formal como Autos Certificados Tlalpan S.A. de C.V. en el directorio oficial de anca.org.mx.
              </p>
            </div>
          </div>

          <a
            href={businessInfo.socials.anca}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-black text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Ver Certificación ANCA
          </a>
        </div>

      </div>
    </section>
  );
};
