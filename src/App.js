import "./App.css";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./components/Root";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
   
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
