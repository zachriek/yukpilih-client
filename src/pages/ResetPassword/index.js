import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import { baseURL } from "../../utils/fetchApi";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    old_password: "",
    new_password: "",
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${baseURL}/auth/reset_password`, {
        method: "POST",
        body: JSON.stringify(passwordData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      let result = await response.json();
      window.alert(result.message);
      if (response.status === 200) {
        sessionStorage.clear();
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <BaseLayout title="Reset Password">
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card">
                <div className="card-header bg-primary text-light">
                  Reset Password
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="old_password">Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="old_password"
                        name="old_password"
                        value={passwordData.old_password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new_password">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="new_password"
                        name="new_password"
                        value={passwordData.new_password}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary shadow-sm"
                    >
                      Reset Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ResetPassword;
