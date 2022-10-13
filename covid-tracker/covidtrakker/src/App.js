import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Cards from './Components/Cards';

function App( props ) {
  const [ coviddata, setCovidData ] = useState([]);

  useEffect(() => {
    const fetchURL = 'https://api.covid19api.com/live/country/pakistan';
    async function getConfirmedData () {
      const result = await axios.get( fetchURL );
      setCovidData(result.data);
      return result;
    }
    getConfirmedData();
  }, [])
  
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Covid-19</h1>
        </header>
        <Cards coviddata={coviddata} /> 
      </div>
      
    </div>
  );
}

export default App;
