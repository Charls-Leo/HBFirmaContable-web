import { site } from "../config/site";

const MENSAJE_POR_DEFECTO =
  `Hola, quisiera recibir información sobre los servicios de ${site.nombre}.`;

export function getEnlaceWhatsapp(mensaje: string = MENSAJE_POR_DEFECTO): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
