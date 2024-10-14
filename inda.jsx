import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to hold the current time for the clock
  const [time, setTime] = useState(new Date());

  // State to hold the current date for the calendar
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update the clock every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get the days of the current month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());

  // Get the first day of the current month
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  // Function to render the calendar grid
  const renderCalendar = () => {
    const days = [];

    // Empty slots for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }

    // Render actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div className="day" key={day}>
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="app">
      <div className="clock">
        <h2>Current Time</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>

      <div className="calendar">
        <h2>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</h2>
        <div className="calendar-grid">
          {/* Weekday Headers */}
          <div className="weekday">Sun</div>
          <div className="weekday">Mon</div>
          <div className="weekday">Tue</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Thu</div>
          <div className="weekday">Fri</div>
          <div className="weekday">Sat</div>

          {/* Days of the month */}
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
}

export default App;