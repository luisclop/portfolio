import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, About, Portfolio, Contact } from "./routes";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}
