import { rutas } from "../config/site";

export const servicios = [
  {
    titulo: "Declaración de renta",
    descripcion:
      "Orientación y preparación de la declaración de renta para personas naturales, de acuerdo con su situación tributaria.",
    icono: "receipt",
    href: rutas.declaracionRenta,
  },
  {
    titulo: "Contabilidad para negocios y empresas",
    descripcion:
      "Organización, registro y seguimiento de la información contable de negocios, emprendimientos y empresas.",
    icono: "bank",
    href: rutas.servicios,
  },
  {
    titulo: "Nómina y seguridad social",
    descripcion:
      "Apoyo en la liquidación de nómina, aportes y obligaciones relacionadas con los trabajadores.",
    icono: "team",
    href: rutas.servicios,
  },
  {
    titulo: "Afiliaciones a seguridad social",
    descripcion:
      "Gestión de afiliaciones y novedades ante las entidades del sistema de seguridad social.",
    icono: "userPlus",
    href: rutas.servicios,
  },
  {
    titulo: "Liquidación de prestaciones sociales",
    descripcion:
      "Cálculo de liquidaciones laborales, vacaciones, primas, cesantías y demás conceptos correspondientes.",
    icono: "wallet",
    href: rutas.servicios,
  },
  {
    titulo: "Certificados de ingresos",
    descripcion:
      "Elaboración de certificados de ingresos para trabajadores independientes y personas que necesitan acreditar su información.",
    icono: "badge",
    href: rutas.servicios,
  },
];
