import Routes from "./Routes";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ fontSize: "1em", fontWeight: "bold" }}>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
