import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  const loginPage = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">JComfort</span>
        </Link>
        {user ? (
          <div className="userLog">
            <button className="btnUser">{user.username}</button>
            <button className="logoutbtn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button
              className="navButton"
              onClick={() => {
                loginPage();
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
