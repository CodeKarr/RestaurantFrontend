import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
       path:"/",
       element:<Home /> 
      },
      {
       path:"/about",
       element:"Hassan" 
      }
    ]
  }
]);
return <RouterProvider router={router} />
}

export default App
