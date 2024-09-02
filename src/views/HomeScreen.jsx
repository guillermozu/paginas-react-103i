import React, { useEffect, useState } from "react";
import { getProducts } from "../helpers/ApiFetch";
import CardProductApp from "../components/CardProductApp";

const HomeScreen = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = () => {
    getProducts()
      .then((response) => setProductos(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Lista de Productos</h1>
        </div>
      </div>
      <div className="row my-5 row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map((item) => (
          <CardProductApp key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
