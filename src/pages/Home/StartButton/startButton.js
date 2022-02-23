import './startButton.css';
import { Link } from 'react-router-dom';

function StartButton() {
  return (
    <>
      <div className="start-button-content">
        <Link to={'/map'} className="start-button">Start</Link>
        <div className="waves wave-1"></div>
        <div className="waves wave-2"></div>
        <div className="waves wave-3"></div>
      </div>
    </>
  );
}

export default StartButton;
