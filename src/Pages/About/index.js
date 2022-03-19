import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from './reducer/actionTypes';
import './style.css';

function About() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  const count = useSelector((state) => state.about.count);

  return (
    <div className="About">
      <header className="About-header">About</header>
      <p>This is my about page. Testing redux without saga functionality.</p>
      <p>Count is "{count}".</p>
      <button onClick={handleIncrement}>Increment</button>&nbsp;
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default About;
