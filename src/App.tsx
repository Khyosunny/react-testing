import React from 'react';
import './App.css';
import RasberryCookieImage from './assets/RaspberryCookie.png';
import Counter from './components/Counter';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Profile username="Raspberry Cookie" image={RasberryCookieImage} />
      <Counter />
    </div>
  );
}

export default App;
