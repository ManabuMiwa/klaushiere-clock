import React, { useState, useEffect } from 'react'
import './app.css'
import { KlaushierianTime } from './klaushierian-time'
import SunWheel from './sun-wheel'
import MoonWheel from './moon-wheel'
import StarWheel from './star-wheel'

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
      <section className="app--clock" data-testid="clock">
        <section className="app--sun-wheel">
          <SunWheel time={time} />
        </section>
        <section className="app--moon-wheel">
          <MoonWheel time={time} />
        </section>
        <section className="app--star-wheel">
          <StarWheel time={time} />
        </section>
      </section>
    </main>
  )
}

export default App
