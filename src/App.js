import birynaniImage from './assests/images/biryani.png';
import commingSoon from './assests/images/comingSoon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={birynaniImage} alt="logo" style={{ width: '-webkit-fill-available' }} />
        <img src={commingSoon} alt="logo" style={{ width: '-webkit-fill-available' }} />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/wablesanket/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>
      </header>
    </div>
  );
}

export default App;
