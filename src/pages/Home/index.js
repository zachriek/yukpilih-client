import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import "./index.css";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="title">
                Welcome to <span>YukPilih</span>
              </h1>
              <Link to="/" className="btn btn-primary btn-lg shadow-sm mt-3">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
