import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/imgs/logo-white.svg';
import './App.scss';

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Sep 30, 2020 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        //stop out timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes)
        setTimerSeconds(seconds);
      }
    }, 1000)
  }

  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <section className="timer">
      <img src={logo} alt="LIV Saúde"/>
      <h2 className="timer-subtitle">RUMO AOS</h2>
      <h1 className="timer-title">#100K</h1>
      <div className="timer-meta">
        <div className="timer-number">
          <h1 className="timer-number-text">
            {timerDays}
          </h1>
          <small>
            DIAS
          </small>
        </div>
        <span className="timer-dot">:</span>
        <div className="timer-number">
          <h1 className="timer-number-text">
            {timerHours}
          </h1>
          <small>
            HORAS
          </small>
        </div>
        <span className="timer-dot">:</span>
        <div className="timer-number">
          <h1 className="timer-number-text">
            {timerMinutes}
          </h1>
          <small>
            MINUTOS
          </small>
        </div>
        <span className="timer-dot">:</span>
        <div className="timer-number">
          <h1 className="timer-number-text">
            {timerSeconds}
          </h1>
          <small>
            SEGUNDOS
          </small>
        </div>
      </div>
    </section>
  );
}

export default App;
