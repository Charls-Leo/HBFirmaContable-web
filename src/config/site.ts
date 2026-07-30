import { withBase } from "../utils/paths";

export const site = {
  nombre: "Presentar By H&B SAS",
  nombreCorto: "Presentar By H&B SAS",
  descripcion:
    "Somos expertos tributarios y contables. Ayudamos a personas y empresas a cumplir sus obligaciones, optimizar sus procesos y tomar decisiones financieras con confianza.",
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
