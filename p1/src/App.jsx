import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import 'react-loading-skeleton/dist/skeleton.css'
import { Route,Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <>
 
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/products/:id" Component={Product} />
      </Routes>
    </>
  );
}

export default App;
