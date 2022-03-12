import { Link, Outlet } from 'react-router-dom';
import './style.css';

function HeaderNav() {
  return (
    <div>
      <nav>
        <ul className="HeaderNav-ul">
          <li className="HeaderNav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default HeaderNav;
