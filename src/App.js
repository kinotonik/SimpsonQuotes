// import logo from './logo.svg';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState([])

  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((res) => res.data)
    .then((data) => {
      setSimpsonQuote(data[0])
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={simpsonQuote.image} className="App-logo" alt="logo" />
        <p>
        The famous Simpsons quotes
        </p>
      </header>
      <DisplayQuote simpson={simpsonQuote} />
      <button type="button" onClick={getQuote}>Get Simpson quote</button>
    </div>
  );
}

export default App;
