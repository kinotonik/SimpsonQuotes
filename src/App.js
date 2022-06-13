// import logo from './logo.svg';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import { useState } from 'react';
import axios from 'axios';

const sampleSimpson =   
  
    {
    "image": "https://www.nicepng.com/png/full/41-416689_share-this-image-homer-simpson-fat-png.png",
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
