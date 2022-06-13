// import logo from './logo.svg';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import { useState } from 'react';
import axios from 'axios';

const sampleSimpson =   
  
    {
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    }

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState(sampleSimpson)
  

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
        <img 
        src={simpsonQuote.image} 
        className="App-logo" alt="logo" />
        <p>
        The famous Simpsons quotes
        </p>
      </header>
      <DisplayQuote simpson={simpsonQuote} />
      <button 
        type="button" 
        onClick={getQuote}>Get Simpson quote
      </button>
    </div>
  );
}

export default App;
