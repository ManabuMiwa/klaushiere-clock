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
    <main className="app">
      <section className="app--time">{ time.toString() }</section>
    </main>
  );
}

export default App;
