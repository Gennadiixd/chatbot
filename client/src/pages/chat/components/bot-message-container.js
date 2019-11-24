import React from 'react';
import BotIcon from '../../../components/bot-icon';
import DateTime from './date-time';

export default function BotMessageContainer({ messageObject }) {
  const { message, date, time } = messageObject;
  return (
    <div className="message-container --accent-gray">
      {message && (
        <div>
          <div className="icon">
            <BotIcon />
          </div>
          <DateTime
            date={date}
            time={time}
          />
        </div>
      )}
      <div className="message --right">{message}</div>
    </div>
  )
}
