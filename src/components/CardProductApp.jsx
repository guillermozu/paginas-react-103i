import React from "react";
import { Link } from "react-router-dom";

const CardProductApp = ({ producto }) => {
  return (
    <div className="col">
      <Link className="nav-link" to={`/product/${producto.id}`}>
        <div className="card">
          <img
            src={producto.image}
            className="card-img-top"
            alt={producto.title}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">{producto.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProductApp;
