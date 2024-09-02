import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const user = {
    correo: "example@example.com",
    pass: "user12345678",
    role: "user",
  };
  const admin = {
    correo: "admin@admin.com",
    pass: "admin12345",
    role: "admin",
  };

  const [formValue, setFormValue] = useState({
    correo: "",
    pass: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const loigIn = (e) => {
    e.preventDefault();
    const { correo, pass } = formValue;

    if (correo === user.correo && pass === user.pass) {
      localStorage.setItem("auth", JSON.stringify(user.role));
      navigate("/");
    } else if (correo === admin.correo && pass === admin.pass) {
      localStorage.setItem("auth", JSON.stringify(admin.role));
      navigate("/");
    } else {
      alert("Correo o contraseña incorrectos");
      setFormValue({
        correo: "",
        pass: "",
      });
      e.target[0].focus();
    }
  };

  return (
    <div className="container vh-100">
      <div className="row h-100  justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inicio de sesión</h5>

              <form onSubmit={loigIn}>
                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formValue.correo}
                    onChange={handleChange}
                    name="correo"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    name="pass"
                    type="password"
                    className="form-control"
                    value={formValue.pass}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success">Iniciar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
