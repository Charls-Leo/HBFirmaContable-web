import { withBase } from "../utils/paths";

export const site = {
  nombre: "HB Presentar Firma Contable by H & B",
  nombreCorto: "HB Presentar",
  descripcion:
    "Firma contable enfocada en brindar claridad y seguridad financiera a través de procesos organizados y acompañamiento humano cercano.",
  url: "https://charls-leo.github.io/HBFirmaContable-web/",
  anio: 2026,
  whatsapp: "573186057841",
  whatsappDisplay: "+57 318 605 7841",
  correo: "kellyhernandezcontadora@gmail.com",
  horario: "Lunes a viernes, 8:00 a.m. - 6:00 p.m.",
};

export const rutas = {
  inicio: withBase("/"),
  servicios: withBase("/servicios/"),
  declaracionRenta: withBase("/declaracion-de-renta/"),
  nosotros: withBase("/nosotros/"),
  comoTrabajamos: withBase("/como-trabajamos/"),
  contacto: withBase("/contacto/"),
  preguntasFrecuentes: withBase("/preguntas-frecuentes/"),
  privacidad: withBase("/privacidad/"),
  tratamientoDatos: withBase("/tratamiento-datos/"),
  terminos: withBase("/terminos/"),
};
