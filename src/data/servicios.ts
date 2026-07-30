import { rutas } from "../config/site";

export const servicios = [
  {
    id: "declaracion-renta",
    titulo: "Declaración de renta",
    descripcion:
      "Orientación y preparación de la declaración de renta para personas naturales, de acuerdo con su situación tributaria.",
    icono: "receipt",
    href: rutas.declaracionRenta,
  },
  {
    id: "contabilidad-negocios-empresas",
    titulo: "Contabilidad para negocios y empresas",
    descripcion:
      "Organización, registro y seguimiento de la información contable de negocios, emprendimientos y empresas.",
    icono: "bank",
    href: rutas.servicios,
  },
  {
    id: "creadores-contenido",
    titulo: "Finanzas para influencers y creadores de contenido",
    tituloFooter: "Finanzas para creadores de contenido",
    descripcion:
      "Diagnóstico inicial gratuito para definir una estructura tributaria adecuada y un plan financiero alineado con el crecimiento de su marca personal.",
    icono: "camera",
    href: `${rutas.servicios}#creadores-contenido`,
  },
  {
    id: "nomina-seguridad-social",
    titulo: "Nómina y seguridad social",
    descripcion:
      "Apoyo en la liquidación de nómina, aportes y obligaciones relacionadas con los trabajadores.",
    icono: "team",
    href: rutas.servicios,
  },
  {
    id: "afiliaciones-seguridad-social",
    titulo: "Afiliaciones a seguridad social",
    descripcion:
      "Gestión de afiliaciones y novedades ante las entidades del sistema de seguridad social.",
    icono: "userPlus",
    href: rutas.servicios,
  },
  {
    id: "liquidacion-prestaciones-sociales",
    titulo: "Liquidación de prestaciones sociales",
    descripcion:
      "Cálculo de liquidaciones laborales, vacaciones, primas, cesantías y demás conceptos correspondientes.",
    icono: "wallet",
    href: rutas.servicios,
  },
];
