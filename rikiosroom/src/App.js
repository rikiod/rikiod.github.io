import './App.css';
import React from 'react';
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">

      <Home />
      <Footer />
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
