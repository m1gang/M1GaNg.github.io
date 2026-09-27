// Datos de la página "Sobre mí" (Perfil).
import { Gamepad2, Palette, Dribbble, Code2, Eye, Users } from "lucide-react";

// Degradados para íconos/títulos de hobbies (mismo estilo que las skills de la portada).
export const HOBBY_GRADIENTS = [
  "linear-gradient(135deg, #8b8afd, #C73AC9)", // Gaming
  "linear-gradient(135deg, #F2A968, #CA1462)", // Diseño
  "linear-gradient(135deg, #FFD666, #FF8A00)", // Basketball
];

export const HOBBIES = [
  { Icon: Gamepad2, label: "Gaming", subtitle: "Dirección artística" },
  { Icon: Palette, label: "Diseño", subtitle: "Tipografía & UI" },
  { Icon: Dribbble, label: "Basketball", subtitle: "Equipo & ritmo" },
];

// Puesto objetivo — titular del CV, con los roles que lo respaldan.
export const ROLE = {
  title: "Frontend Developer",
  level: "Junior",
  support: ["Soporte técnico", "Operaciones y logística"],
};

// Trayectoria — resumen cronológico; el detalle vive en las páginas de Experiencia.
export const MILESTONES = [
  { year: "2018–2023", label: "Ing. de Sistemas · UNCP" },
  { year: "2023–2024", label: "Desarrollo web & Soporte" },
  { year: "2024–2025", label: "Almacén & Logística" },
  { year: "2026–hoy", label: "React Jr & Líder Frontend" },
];

export const WORKING_PRINCIPLES = [
  {
    Icon: Code2,
    title: "Código Limpio y Modular",
    description:
      "Componentes reutilizables, estructura predecible y buenas prácticas con foco en mantenibilidad.",
    gradient: "linear-gradient(135deg, #22C55E, #06B6D4)",
    gradientId: "principle-code",
  },
  {
    Icon: Eye,
    title: "Detalle Visual & UX",
    description:
      "Cuidado riguroso del espaciado, jerarquía tipográfica, estados responsivos y accesibilidad.",
    gradient: "linear-gradient(135deg, #FB923C, #DB2777)",
    gradientId: "principle-ux",
  },
  {
    Icon: Users,
    title: "Adaptabilidad y Equipo",
    description:
      "Comunicación fluida, compromiso con plazos y disposición constante para aprender nuevas tecnologías.",
    gradient: "linear-gradient(135deg, #A78BFA, #38BDF8)",
    gradientId: "principle-team",
  },
];
