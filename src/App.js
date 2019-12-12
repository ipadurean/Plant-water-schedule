import React from 'react';
import Calendar from './Containers/Calendar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tandem Plant Watering Schedule
      </header>
      <div className="main-container">
         <Calendar />
      </div>
    </div>
  );
}

export default App;
