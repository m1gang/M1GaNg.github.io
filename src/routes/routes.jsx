import { Navigate, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePortada from "../pages/HomePortada";
import HomeRedes from "../pages/HomeRedes";
import ProfileAbout from "../pages/ProfileAbout";
import ProfileEducation from "../pages/ProfileEducation";
import ProfileSkills from "../pages/ProfileSkills";
import ExperienceCondisa from "../pages/ExperienceCondisa";
import ExperienceUNCP from "../pages/ExperienceUNCP";
import Contact from "../pages/Contact";
import ProjectsMiniApps from "../pages/ProjectsMiniApps";
import ProjectsReact from "../pages/ProjectsReact";
import ProjectsCondisa from "../pages/ProjectsCondisa";
import ExperienceDevdatep from "@/pages/ExperienceDevdatep";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/inicio/portada" replace />,
      },
      {
        path: "inicio",
        children: [
          {
            index: true,
            element: <Navigate to="/inicio/portada" replace />,
          },
          {
            path: "portada",
            element: <HomePortada />,
          },
          {
            path: "redes",
            element: <HomeRedes />,
          },
        ],
      },
      {
        path: "perfil",
        children: [
          {
            index: true,
            element: <Navigate to="/perfil/sobre-mi" replace />,
          },
          {
            path: "sobre-mi",
            element: <ProfileAbout />,
          },
          {
            path: "educacion",
            element: <ProfileEducation />,
          },
          {
            path: "habilidades",
            element: <ProfileSkills />,
          },
        ],
      },
      {
        path: "proyectos",
        children: [
          {
            index: true,
            element: <Navigate to="/proyectos/miniapps" replace />,
          },
          {
            path: "miniapps",
            element: <ProjectsMiniApps />,
          },
          {
            path: "react",
            element: <ProjectsReact />,
          },
          {
            path: "condisa",
            element: <ProjectsCondisa />,
          },
        ],
      },
      {
        path: "experiencia",
        children: [
          {
            index: true,
            element: <Navigate to="/experiencia/devdatep" replace />,
          },
          {
            path: "devdatep",
            element: <ExperienceDevdatep />,
          },
          {
            path: "condisa",
            element: <ExperienceCondisa />,
          },
          {
            path: "uncp",
            element: <ExperienceUNCP />,
          },
        ],
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
]);
