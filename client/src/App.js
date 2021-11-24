import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey There
        </p>
        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in with google
        </a>
      </header>
    </div>
  );
}

export default App;
