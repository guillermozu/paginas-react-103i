import React, { useEffect, useState } from "react";

const ProductScreen = () => {
  // obtener el id del producto
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerProducto();
  }, []);

  const traerProducto = () => {
    getProduct(id)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Detalle de producto</h1>
        </div>
      </div>
      {loading && (
        <div className="row mt-5">
          <div className="col">
            <h3>Cargando...</h3>
          </div>
        </div>
      )}
      <div className="row mt-5">
        <div className="col">
          {/* mostrar tarjeta de producto si hay datos  */}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
