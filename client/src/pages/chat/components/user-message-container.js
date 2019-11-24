import React from 'react';
import UserIcon from '../../../components/user-icon';
import DateTime from './date-time';

export default function UserMessageContainer({ messageObject }) {
  const { message, date, time } = messageObject
  return (
    <div className="message-container">
      {message && (
        <div className="dot">·</div>
      )}
      <div className="message --left">
        <div>{message}</div>
        <DateTime
          date={date}
          time={time}
        />
      </div>
      {message && (
        <div className="icon"><UserIcon /></div>
      )}
    </div>
  )
}
