import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './reducer/actionTypes';
import './style.css';

function Portfolio() {
  const dispatch = useDispatch();

  const handleGetuser = () => {
    dispatch(getUser());
  };

  const user = useSelector((state) => state.portfolio.user);

  return (
    <div className="Portfolio">
      <header className="Portfolio-header">Portfolio</header>
      <p>This is my portfolio page. Testing redux with saga functionality.</p>
      {user && (
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
      )}
      <button onClick={handleGetuser}>Get User</button>&nbsp;
    </div>
  );
}

export default Portfolio;
