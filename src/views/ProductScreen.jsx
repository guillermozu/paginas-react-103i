import React, { useEffect, useState } from "react";
import { getProduct } from "../helpers/ApiFetch";
import { useParams } from "react-router-dom";
import "../css/spinner.css";
//http://localhost:5173/product/9
//{*:'product/9',id:'9' }

const ProductScreen = () => {
  // obtener el id del producto
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerProducto();
  }, []);

  const traerProducto = () => {
    getProduct(id)
      .then((response) => {
        setProducto(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <div className="loader"></div>
          </div>
        </div>
      )}
      <div className="row mt-5">
        <div className="col">
          {producto && (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 p-2">
                  <img
                    src={producto.image}
                    className="img-fluid rounded-start"
                    alt={producto.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        ${producto.price}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
