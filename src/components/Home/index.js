import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [logoutSuccess, toggleSucess] = useState(false);

  useEffect(() => {
    if (location.state && location.state.showLogoutSuccess) {
      toggleSucess(true);
      const clear = setTimeout(() => toggleSucess(false), 5000);
      return () => clearTimeout(clear);
    }
  }, [location.state]);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {logoutSuccess && (
        <h3 style={{ color: "green", fontSize: "1.5em" }}>
          You have been logged out successfully!!
        </h3>
      )}
      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
