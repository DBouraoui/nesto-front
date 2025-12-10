import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Toaster} from "sonner";
import AnonymousLayout from "@/layouts/AnonymousLayout.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import {ThemeProvider} from "@/components/ui/theme-provider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AnonymousLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
          <Toaster />
      </ThemeProvider>
  </StrictMode>,
)
