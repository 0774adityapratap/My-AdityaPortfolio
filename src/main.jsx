import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Compontes/Layout/Layout.jsx";
import About from "./Compontes/About/About.jsx";
import Contact from "./Compontes/Contact/Contact.jsx";
import Home from "./Compontes/Home/Home.jsx";
import Landing from "./Compontes/Landingpage/Landing.jsx";
import Singin from "./Compontes/SingIn/Singin.jsx";
import S from "./Compontes/SingIn/S.jsx";


const router = createBrowserRouter(
 [
  {
    path: "/",
    element : <Layout/>
  },
  {
    path: "/My TechTooles",
    element : <About/>
  },
  {
    path: "/know me",
    element : <Contact/> 
  },
  {
    path: "/Get In Tuch",
    element : <Singin/> 
  },
  {
    path: "/Get",
    element : <S/> 
  },
]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
