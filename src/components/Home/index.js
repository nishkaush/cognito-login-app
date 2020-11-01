import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <button>
      <Link to="/signup">Signup</Link>
    </button>
    <button>
      <Link to="/login">Login</Link>
    </button>
  </div>
);

export default Home;
