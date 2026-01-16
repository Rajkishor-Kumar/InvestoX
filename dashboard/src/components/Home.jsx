import { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  // AUTH CHECK ON LOAD
  useEffect(() => {
    axios
      .get("http://localhost:3002/me", { withCredentials: true })
      .catch(() => {
        // Not logged in → Landing page
        window.location.href = "http://localhost:5173/";
      });
  }, []);

  // LOGOUT HANDLER
  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3002/logout",
      {},
      { withCredentials: true }
    );

    window.location.href = "http://localhost:5173/";
  };

  return (
    <GeneralContextProvider>
      <TopBar onLogout={handleLogout} />
      <Dashboard />
    </GeneralContextProvider>
  );
};

export default Home;