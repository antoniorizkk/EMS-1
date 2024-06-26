import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";


const Layout = () => {
  return (
    
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;