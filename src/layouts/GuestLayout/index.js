import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const GuestLayout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, []);

  return (
    <section id="guest">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default GuestLayout;
