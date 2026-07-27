import { rutas } from "../config/site";

export const navegacionPrincipal = [
  { etiqueta: "Inicio", href: rutas.inicio },
  { etiqueta: "Servicios", href: rutas.servicios },
  { etiqueta: "Nosotros", href: rutas.nosotros },
  { etiqueta: "Cómo trabajamos", href: rutas.comoTrabajamos },
  { etiqueta: "Preguntas frecuentes", href: rutas.preguntasFrecuentes },
];

export const navegacionFooter = [
  ...navegacionPrincipal,
  { etiqueta: "Agendar una cita", href: rutas.contacto },
];

export const navegacionLegal = [
  { etiqueta: "Privacidad", href: rutas.privacidad },
  { etiqueta: "Tratamiento de datos", href: rutas.tratamientoDatos },
  { etiqueta: "Términos", href: rutas.terminos },
];
