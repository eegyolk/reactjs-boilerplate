import { useRoutes } from 'react-router-dom';
import './style.css';
import headerNavRoutes from '../../routes/headerNavRoutes';

function Header() {
  const routes = useRoutes(headerNavRoutes);

  return (
    <div>
      <div className="Header">My Header</div>
      {routes}
    </div>
  );
}

export default Header;
