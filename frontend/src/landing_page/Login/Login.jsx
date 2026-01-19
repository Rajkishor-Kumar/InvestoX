import { useState } from "react";
import axios from "axios";

// 🔥 Backend API from env
const API = import.meta.env.VITE_API_URL;

// 🔥 Dashboard URL (optional but recommended)
const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/login`,
        formData,
        { withCredentials: true } // 🔥 REQUIRED for sessions
      );

      if (res.data.success) {
        // 🚀 Redirect to dashboard app
        window.location.href = import.meta.env.VITE_DASHBOARD_URL;
      }
    } catch (err) {
      alert(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="col-6 offset-3">
      <h3 className="text-center mb-3">Login</h3>

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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-dark w-100 mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
