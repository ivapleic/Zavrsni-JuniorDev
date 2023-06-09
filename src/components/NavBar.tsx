import { useContext } from "react";
import { Link } from "react-router-dom";
import UserRoleContext from "./UserRole";
import "../styles/NavBar.css";

function NavBar() {
  const { userRole, setUserRole } = useContext(UserRoleContext);

  function handleUserRoleChange(event:any) {
    setUserRole(event.target.checked ? "admin" : "user");
  }

  return (
    <div className="header">
      <img src="src\assets\dog-cat.jpg" className="logo" alt="logo" />
      <div className="inner">
        <div className="nav-bar">
          <Link to="/about-us">O nama</Link>
          <Link to="/animals">Životinje</Link>
          <Link to="/donations">Donacije</Link>
          <Link to="/notifications">Obavijesti</Link>
          {userRole === "admin" && <Link to="/add-new">Dodaj životinju</Link>}
        </div>
        <div className="user-role">
            <input
              type="checkbox"
              checked={userRole === "admin"}
              onChange={handleUserRoleChange}
              className="admin-check"
            />
            <label className="switch">&#8594;{" "}Admin</label>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
