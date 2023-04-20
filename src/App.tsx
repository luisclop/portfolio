import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, About, Stack, Portfolio, Contact } from "./routes";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "stack", element: <Stack /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
