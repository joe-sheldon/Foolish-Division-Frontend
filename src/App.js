import logo from './public/logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Splitwise got greedy. We're starting this to provide a free, open source alternative.
        </p>
        <a
          className="App-link"
          href="https://github.com/kb3vwt/Foolish-Division"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </header>
    </div>
  );
}

export default App;
