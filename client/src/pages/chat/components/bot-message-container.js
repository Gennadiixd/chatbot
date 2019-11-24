import React from 'react';
import BotIcon from '../../../components/bot-icon';

export default function BotMessageContainer({message}) {
  return (
    <div className="message-container">
      {message && (
        <div className="icon"><BotIcon /></div>
      )}
      <div className="message --right">{message}</div>
    </div>
  )
}
