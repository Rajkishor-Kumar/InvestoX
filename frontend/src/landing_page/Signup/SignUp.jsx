import { useState } from "react";
import axios from "axios";

// 🔥 Backend API from env
const API = import.meta.env.VITE_API_URL;

// 🔥 Dashboard URL
const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ SIGNUP
      const signupRes = await axios.post(
        `${API}/signup`,
        formData,
        { withCredentials: true }
      );

      if (signupRes.data.success) {
        // 2️⃣ AUTO LOGIN
        const loginRes = await axios.post(
          `${API}/login`,
          {
            username: formData.username,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (loginRes.data.success) {
          // 3️⃣ REDIRECT TO DASHBOARD
          window.location.href = import.meta.env.VITE_DASHBOARD_URL;
        }
      }
    } catch (err) {
      alert(
        err.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="col-6 offset-3">
      <h3 className="text-center mb-3">Sign Up</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={formInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={formInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={formInputChange}
            required
          />
        </div>

        <button className="btn btn-dark w-100 mt-2">
          Sign Up
        </button>
      </form>
    </div>
  );
}