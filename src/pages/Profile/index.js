import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import { baseURL } from "../../utils/fetchApi";
import "./index.css";

const Profile = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      let response = await fetch(`${baseURL}/auth/me`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      let result = await response.json();
      setUser(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BaseLayout title="Profile">
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card">
                <div className="card-header bg-primary text-light">
                  My Profile
                </div>
                <div className="card-body">
                  <h5 className="card-title">{user.username}</h5>
                  <h6 className="card-subtitle text-muted mb-3">{user.role}</h6>
                  <Link
                    to="/reset-password"
                    className="btn btn-sm btn-primary shadow-sm"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Profile;
