import logo from './logo.svg';
import HelloWorldComponent from './HelloWorldComponent';
import './App.css';

function App() {
  const hello = "Hello World";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hello}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {<HelloWorldComponent/>}
      </header>
    </div>
  );
}

export default App;
