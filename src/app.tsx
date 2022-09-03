import React, { useState, useEffect } from 'react';
import './app.css';
import { KlaushierianTime } from './klaushierian-time';

function App() {
  const [time, setTime] = useState(new KlaushierianTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new KlaushierianTime())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <main className="app">
      <section className="app--time">{ time.toString() }</section>
    </main>
  );
}

export default App;
