import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Toaster} from "sonner";
import AnonymousLayout from "@/layouts/AnonymousLayout.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import {ThemeProvider} from "@/components/ui/theme-provider.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

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

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <RouterProvider router={router} />
              <Toaster />
          </ThemeProvider>
      </Suspense>
          </QueryClientProvider>
  </StrictMode>,
)
