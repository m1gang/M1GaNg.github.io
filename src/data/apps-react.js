const asset = (file) => new URL(`../assets/img/${file}`, import.meta.url).href;

export const REACT_APPS = {
  gifs: {
    id: "gifs",
    title: "GIFs App Search",
    description:
      "Aplicación para buscar y visualizar GIFs animados utilizando la API de Giphy. Desarrollada con React y Vite, permite a los usuarios buscar, explorar y guardar sus GIFs favoritos con una interfaz moderna y responsiva.",
    iconSrc: asset("icon-projects/giff-search.webp"),
    images: [asset("projects/REACT/gif-app-search.webp")],
    techs: ["React", "TypeScript", "Vite", "Vitest", "Giphy API", "DevTalles"],
    repoUrl: "https://github.com/m1gang/gifs-app-updated",
  },
  heroes: {
    id: "heroes",
    title: "Heroes App Search",
    description:
      "Aplicación de búsqueda de superhéroes con información detallada de personajes de DC y Marvel. Incluye sistema de rutas protegidas, autenticación de usuarios y búsqueda avanzada con filtros. Desarrollada con React Router y Context API.",
    iconSrc: asset("icon-projects/logo-heroes-search.webp"),
    images: [
      asset("projects/REACT/heroes-app-search-1.webp"),
      asset("projects/REACT/heroes-app-search-2.webp"),
      asset("projects/REACT/heroes-app-search-3.webp"),
    ],
    techs: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "React Router",
      "React Query",
      "DevTalles",
    ],
    repoUrl: "https://github.com/m1gang/heroes-app-updated",
  },
  journal: {
    id: "journal",
    title: "Journal App",
    description:
      "Aplicación de diario personal desarrollada con React, Vite y Firebase. Permite a los usuarios crear, editar y gestionar sus notas personales con autenticación segura y almacenamiento en la nube. Incluye carga de imágenes y sincronización en tiempo real.",
    iconSrc: asset("icon-projects/journal-app.webp"),
    images: [
      asset("projects/REACT/journal-app-1.webp"),
      asset("projects/REACT/journal-app-2.webp"),
    ],
    techs: [
      "React",
      "Vite",
      "MaterialUI",
      "Firebase",
      "React Router",
      "Redux",
      "DevTalles",
    ],
    repoUrl: "https://github.com/m1gang/journal-app-react",
  },
  teslo: {
    id: "teslo",
    title: "Teslo Shop",
    description:
      "E-commerce completo desarrollado con React y Next.js. Incluye catálogo de productos, carrito de compras, sistema de pagos con PayPal, gestión de inventario y panel de administración. Diseñado con una interfaz moderna y optimizado para SEO.",
    iconSrc: asset("icon-projects/teslo-shop.webp"),
    images: [
      asset("projects/REACT/teslo-shop-react-1.webp"),
      asset("projects/REACT/teslo-shop-react-2.webp"),
      asset("projects/REACT/teslo-shop-react-3.webp"),
    ],
    techs: [
      "TypeScript",
      "Vite",
      "Tailwind",
      "Zustand",
      "React Router",
      "React Query",
      "DevTalles",
    ],
    repoUrl: "https://github.com/m1gang/teslo-shop-react",
  },
};
