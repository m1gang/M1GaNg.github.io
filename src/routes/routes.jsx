import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const HomePortada = lazy(() => import("../pages/HomePortada"));
const ProfileAbout = lazy(() => import("../pages/ProfileAbout"));
const ProfileEducation = lazy(() => import("../pages/ProfileEducation"));
const Experience = lazy(() => import("../pages/Experience"));
const Contact = lazy(() => import("../pages/Contact"));
const ProjectsMiniApps = lazy(() => import("../pages/ProjectsMiniApps"));
const ProjectsReact = lazy(() => import("../pages/ProjectsReact"));
const ProjectsCondisa = lazy(() => import("../pages/ProjectsCondisa"));

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
            element: <Experience />,
          },
          {
            path: "devdatep",
            element: <Navigate to="/experiencia" replace />,
          },
          {
            path: "condisa",
            element: <Navigate to="/experiencia" replace />,
          },
          {
            path: "uncp",
            element: <Navigate to="/experiencia" replace />,
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
