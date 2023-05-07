import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, About, Portfolio, Contact } from "./routes";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    {
      // This is the default value for the "basename" prop
      basename: "/portfolio",
    }
  );

  return <RouterProvider router={router} />;
}
