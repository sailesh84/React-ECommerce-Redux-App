import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./products.json";
import Product from "./Components/Product";
import Cart from "./Components/Cart";


const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Cart />
        <div className="products">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;