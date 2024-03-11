import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Products />,
    },
    {
      path: "/details/:id",
      element: <ProductDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
