import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const BaseLayout = (props) => {
  document.title = `${props.title} - YukPilih`;

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="my-4">{props.children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
