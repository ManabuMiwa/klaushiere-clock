import React, { useState, useEffect } from 'react';
import './App.css';
import { KlaushiereTime } from './klaushiere-time';

function App() {
  const [time, setTime] = useState(new KlaushiereTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new KlaushiereTime())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="app">
      <main className="app--time">{ time.toString() }</main>
    </div>
  );
}

export default App;
