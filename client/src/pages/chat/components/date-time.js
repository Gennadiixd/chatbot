import React from 'react';

export default function DateTime({ date, time }) {
  return (
    <div className="date-time-container">
      <div className="date">
        {date}
      </div>
      <div className="time">
        {time}
      </div>
    </div>
  )
}
