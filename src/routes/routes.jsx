import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const HomePortada = lazy(() => import("../pages/HomePortada"));
const ProfileAbout = lazy(() => import("../pages/ProfileAbout"));
const ProfileEducation = lazy(() => import("../pages/ProfileEducation"));
const ProfileSkills = lazy(() => import("../pages/ProfileSkills"));
const ExperienceCondisa = lazy(() => import("../pages/ExperienceCondisa"));
const ExperienceUNCP = lazy(() => import("../pages/ExperienceUNCP"));
const Contact = lazy(() => import("../pages/Contact"));
const ProjectsMiniApps = lazy(() => import("../pages/ProjectsMiniApps"));
const ProjectsReact = lazy(() => import("../pages/ProjectsReact"));
const ProjectsCondisa = lazy(() => import("../pages/ProjectsCondisa"));
const ExperienceDevdatep = lazy(() => import("@/pages/ExperienceDevdatep"));

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
