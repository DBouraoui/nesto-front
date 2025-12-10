import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Toaster} from "sonner";
import AnonymousLayout from "@/layouts/AnonymousLayout.tsx";
import LandingPage from "@/pages/LandingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AnonymousLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
  </StrictMode>,
)
