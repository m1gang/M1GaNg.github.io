const asset = (file) => new URL(`../assets/img/${file}`, import.meta.url).href;

export const MINI_APPS = {
  telephone: {
    id: "telephone",
    title: "Telephone Number Validator",
    description:
      "Validador de números telefónicos de Estados Unidos. Verifica el formato correcto de números telefónicos según las reglas de formato norteamericano. Desarrollado con HTML, CSS y JavaScript vanilla para validación en tiempo real.",
    iconSrc: asset("icon-projects/phone-validate.webp"),
    images: [asset("projects/miniapps/telefono-validator.webp")],
    techs: ["HTML", "CSS", "JavaScript", "Regex", "freecodecamp"],
    repoUrl:
      "https://github.com/m1gang/telephone-number-validator-freeCodeCamp",
  },
  palindrome: {
    id: "palindrome",
    title: "Palindrome Checker",
    description:
      "Verificador de palíndromos que determina si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios, puntuación y mayúsculas para una validación precisa.",
    iconSrc: asset("icon-projects/palindrome.webp"),
    images: [asset("projects/miniapps/palindrome-checker.webp")],
    techs: ["HTML", "CSS", "JavaScript", "freecodecamp"],
    repoUrl: "https://github.com/m1gang/palindrome-checker-freeCodeCamp",
  },
  roman: {
    id: "roman",
    title: "Roman Numeral Converter",
    description:
      "Conversor de números arábigos a números romanos. Convierte cualquier número del 1 al 3999 a su equivalente en numeración romana. Implementa el algoritmo de conversión con validación de rangos y manejo de casos especiales.",
    iconSrc: asset("icon-projects/roman-converter.webp"),
    images: [asset("projects/miniapps/roman-numeral-converter.webp")],
    techs: ["HTML", "CSS", "JavaScript", "freecodecamp"],
    repoUrl: "https://github.com/m1gang/roman-numeral-converter-freeCodeCamp",
  },
  rpg: {
    id: "rpg",
    title: "RPG Creature Search",
    description:
      "Buscador de criaturas para juegos de rol (RPG). Permite buscar y filtrar diferentes tipos de criaturas con sus estadísticas y características. Incluye sistema de búsqueda avanzada y visualización detallada de información.",
    iconSrc: asset("icon-projects/rpg-search.webp"),
    images: [asset("projects/miniapps/rpg-searach-creature.webp")],
    techs: ["HTML", "CSS", "JavaScript", "API", "freecodecamp"],
    repoUrl: "https://github.com/m1gang/RPG-creature-search-freeCodeCamp",
  },
  cashRegister: {
    id: "cashRegister",
    title: "Cash Register",
    description:
      "Caja registradora que calcula el cambio a devolver al cliente. Maneja diferentes denominaciones de billetes y monedas, verifica si hay suficiente cambio disponible y muestra el desglose exacto del cambio a entregar.",
    iconSrc: asset("icon-projects/cash.webp"),
    images: [asset("projects/miniapps/cash-register.webp")],
    techs: ["HTML", "CSS", "JavaScript", "freecodecamp"],
    repoUrl: "https://github.com/m1gang/cash-register-freecodeCamp",
  },
  formDesign: {
    id: "formDesign",
    title: "Form Design",
    description:
      "Diseño moderno de formulario desarrollado con Tailwind CSS. Presenta un diseño limpio y profesional con validación de campos, efectos visuales atractivos y totalmente responsivo. Ideal como plantilla para formularios de contacto o registro.",
    iconSrc: asset("icon-projects/form.webp"),
    images: [asset("projects/miniapps/form-design.webp")],
    techs: ["HTML", "Tailwind", "JavaScript", "Responsive"],
    repoUrl: "#",
  },
};
