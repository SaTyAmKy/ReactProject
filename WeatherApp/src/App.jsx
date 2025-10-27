import { useState } from 'react';
import './App.css'

function App() {
  const [city, setCity] = useState("");
  function fetchWhether(){
    console.log("Fetching weather for:", city);
    
  }
  return (
    <>
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)}/>
      <button onClick={fetchWhether}>Get Whether</button>

    </div>

    </>
  )
}

export default App
