// Fuente: "Plazos para el cumplimiento de las obligaciones tributarias administradas
// por la UAE DIAN" — Calendario Tributario DIAN 2026, sección "Renta - Personas naturales".
// Verificado línea por línea contra el PDF oficial.

export interface RangoVencimiento {
  digitos: string;
  fecha: string;
}

export interface MesVencimiento {
  mes: string;
  anio: number;
  rangos: RangoVencimiento[];
}

export const CALENDARIO_VENCIMIENTOS: MesVencimiento[] = [
  {
    mes: "Agosto",
    anio: 2026,
    rangos: [
      { digitos: "01-02", fecha: "12 de agosto" },
      { digitos: "03-04", fecha: "13 de agosto" },
      { digitos: "05-06", fecha: "14 de agosto" },
      { digitos: "07-08", fecha: "18 de agosto" },
      { digitos: "09-10", fecha: "19 de agosto" },
      { digitos: "11-12", fecha: "20 de agosto" },
      { digitos: "13-14", fecha: "21 de agosto" },
      { digitos: "15-16", fecha: "24 de agosto" },
      { digitos: "17-18", fecha: "25 de agosto" },
      { digitos: "19-20", fecha: "26 de agosto" },
      { digitos: "21-22", fecha: "27 de agosto" },
      { digitos: "23-24", fecha: "28 de agosto" },
      { digitos: "25-26", fecha: "31 de agosto" },
    ],
  },
  {
    mes: "Septiembre",
    anio: 2026,
    rangos: [
      { digitos: "27-28", fecha: "1 de septiembre" },
      { digitos: "29-30", fecha: "2 de septiembre" },
      { digitos: "31-32", fecha: "3 de septiembre" },
      { digitos: "33-34", fecha: "4 de septiembre" },
      { digitos: "35-36", fecha: "7 de septiembre" },
      { digitos: "37-38", fecha: "8 de septiembre" },
      { digitos: "39-40", fecha: "9 de septiembre" },
      { digitos: "41-42", fecha: "10 de septiembre" },
      { digitos: "43-44", fecha: "11 de septiembre" },
      { digitos: "45-46", fecha: "14 de septiembre" },
      { digitos: "47-48", fecha: "15 de septiembre" },
      { digitos: "49-50", fecha: "16 de septiembre" },
      { digitos: "51-52", fecha: "17 de septiembre" },
      { digitos: "53-54", fecha: "18 de septiembre" },
      { digitos: "55-56", fecha: "21 de septiembre" },
      { digitos: "57-58", fecha: "22 de septiembre" },
      { digitos: "59-60", fecha: "23 de septiembre" },
      { digitos: "61-62", fecha: "24 de septiembre" },
      { digitos: "63-64", fecha: "25 de septiembre" },
      { digitos: "65-66", fecha: "28 de septiembre" },
    ],
  },
  {
    mes: "Octubre",
    anio: 2026,
    rangos: [
      { digitos: "67-68", fecha: "1 de octubre" },
      { digitos: "69-70", fecha: "2 de octubre" },
      { digitos: "71-72", fecha: "5 de octubre" },
      { digitos: "73-74", fecha: "6 de octubre" },
      { digitos: "75-76", fecha: "7 de octubre" },
      { digitos: "77-78", fecha: "8 de octubre" },
      { digitos: "79-80", fecha: "9 de octubre" },
      { digitos: "81-82", fecha: "13 de octubre" },
      { digitos: "83-84", fecha: "14 de octubre" },
      { digitos: "85-86", fecha: "15 de octubre" },
      { digitos: "87-88", fecha: "16 de octubre" },
      { digitos: "89-90", fecha: "19 de octubre" },
      { digitos: "91-92", fecha: "20 de octubre" },
      { digitos: "93-94", fecha: "21 de octubre" },
      { digitos: "95-96", fecha: "22 de octubre" },
      { digitos: "97-98", fecha: "23 de octubre" },
      { digitos: "99-00", fecha: "26 de octubre" },
    ],
  },
];

export const NOTA_CALENDARIO =
  "Estas son las fechas límite establecidas por la DIAN para presentar la declaración de renta de personas naturales, año gravable 2025. El vencimiento se determina según los dos últimos dígitos del NIT o cédula, sin incluir el dígito de verificación.";
